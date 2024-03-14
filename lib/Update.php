<?php

namespace Contexis\Timber;

defined( 'ABSPATH' ) || exit;


if( ! class_exists( 'Update' ) ) {

	class Update {

		public $plugin_slug;
		public $version;
		public $cache_key;
		public $cache_allowed;

		public static function init($plugin_slug) {
			new self($plugin_slug);
		}

		public function __construct($plugin_slug) {

			if ( ! function_exists( 'get_plugin_data' ) ) { require_once( ABSPATH . 'wp-admin/includes/plugin.php' ); }
			$data = get_plugin_data( $this->get_plugin_dir_by_slug($plugin_slug) );
			$this->plugin_slug = $plugin_slug;
			$this->version = $data['Version'];
			$this->cache_key = 'ctx_plugin_update_' . $this->plugin_slug;
			$this->cache_allowed = !$this->is_plugin_page();
			
			add_filter( 'plugins_api', array( $this, 'info' ), 20, 3 );
			add_filter( 'site_transient_update_plugins', array( $this, 'transient_update' ) );
			add_action( 'upgrader_process_complete', array( $this, 'purge' ), 10, 2 );
			
		}

		/*
		 * Check if we are on the plugins page
		 */
		public function is_plugin_page() {
			return isset( $_SERVER['SCRIPT_NAME']) && $_SERVER['SCRIPT_NAME'] === '/wp-admin/plugins.php';
		}

		/*
		 * Get the plugin information from the API
		 */
		public function request(){

			$remote = get_transient( $this->cache_key );

			if( false === $remote || ! $this->cache_allowed ) {

				$remote = wp_remote_get(
					'https://update.kids-team.com/wp?id=' . $this->plugin_slug,
					array(
						'timeout' => 10,
						'headers' => array(
							'Accept' => 'application/json'
						)
					)
				);

				if(
					is_wp_error( $remote )
					|| 200 !== wp_remote_retrieve_response_code( $remote )
					|| empty( wp_remote_retrieve_body( $remote ) )
				) {
					return false;
				}

				set_transient( $this->cache_key, $remote, DAY_IN_SECONDS );

			}

			$remote = json_decode( wp_remote_retrieve_body( $remote ) );

			return $remote;

		}

		/*
		 * Get the plugin information from the API
		 */
		function info( $res, $action, $args ) {		 

			// do nothing if you're not getting plugin information right now
			if( 'plugin_information' !== $action ) {
				return $res;
			}

			// do nothing if it is not our plugin
			if( $this->plugin_slug !== $args->slug ) {
				return $res;
			}

			// get updates
			$remote = $this->request();

			if( ! $remote ) {
				return $res;
			}

			$res = new \stdClass();

			$res->name = $remote->name;
			$res->slug = $remote->slug;
			$res->version = $remote->version;
			$res->tested = $remote->tested;
			$res->requires = $remote->requires;
			$res->author = $remote->author;
			$res->author_profile = $remote->author_profile;
			$res->download_link = $remote->download_url;
			$res->trunk = $remote->download_url;
			$res->requires_php = $remote->requires_php;
			$res->last_updated = $remote->last_updated;

			$res->sections = array(
				'description' => $remote->sections->description,
				'installation' => $remote->sections->installation,
				'changelog' => $remote->sections->changelog
			);

			if( ! empty( $remote->banners ) ) {
				$res->banners = array(
					'low' => $remote->banners->low,
					'high' => $remote->banners->high
				);
			}

			return $res;

		}

		public function transient_update( $transient ) {

			if ( empty($transient->checked ) ) {
				return $transient;
			}

			$remote = $this->request();
			
			if(
				$remote
				&& version_compare( $this->version, $remote->version, '<' )
				&& version_compare( $remote->requires, get_bloginfo( 'version' ), '<=' )
				&& version_compare( $remote->requires_php, PHP_VERSION, '<' )
			) {
				
				$res = new \stdClass();
				$res->slug = $this->plugin_slug;
				$res->plugin = $this->plugin_slug . '/' . $this->plugin_slug . '.php';
				$res->new_version = $remote->version;
				$res->tested = $remote->tested;
				$res->package = $remote->download_url;

				$transient->response[ $res->plugin ] = $res;

	    	}

			return $transient;

		}

		public function purge( $upgrader, $options ){

			if (
				$this->cache_allowed
				&& 'update' === $options['action']
				&& 'plugin' === $options[ 'type' ]
			) {
				// just clean the cache when new plugin version is installed
				delete_transient( $this->cache_key );
			}

		}

		public function get_plugin_dir_by_slug( $slug ) {
			$plugins = get_plugins();
			foreach( $plugins as $plugin_file => $plugin_info ) {
				if( $slug === dirname( $plugin_file ) ) {
					return WP_PLUGIN_DIR . '/' . $plugin_file;
				}
			}
			return false;
		}


	}
}