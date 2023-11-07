<?php
namespace Contexis\Utils;

class Assets {

	public $assets = [
		'style'         => 'bricks-block',
		'editor_script' => 'bricks-block-editor',
		'editor_style'  => 'bricks-block-editor',
	];

	/**
	 * 
	 * Register shared scripts and styles for all blocks
	 * 
	 * @return Assets
	 */
    public static function init() {
        
		$instance = new self;

        add_action( 'init', [$instance, "register_assets"] );

		add_action('enqueue_block_editor_assets', function() {
			wp_enqueue_script('bricks-block-filter', plugin_dir_url(__FILE__) . "../build/admin.js", [], false, true);
		});

       	add_action('init', function() {
        	wp_enqueue_script('bricks-frontend', plugin_dir_url(__FILE__) . "../build/frontend.js", [], false, true);
    	});

		add_action('wp_enqueue_scripts', function() {
			wp_enqueue_style('bricks-frontend', plugin_dir_url(__FILE__) . "../build/frontend.css", [], false);
		});

		return $instance;
    }

	/**
	 * Return the array used for block registration
	 *
	 * @return array
	 */
	public function get() {
		return $this->assets;
	}

	/**
	 * Callback function to register the assets in the init hook
	 *
	 * @return void
	 */
    public function register_assets() {
		$dir = __DIR__ . "/../build/";

		if ( ! file_exists( $dir . "index.asset.php" ) ) {
			  throw new \Error(
					  'You need to run `npm start` or `npm run build` for the timber blocks first.'
			 );
		}

		$script_asset = require( $dir . "index.asset.php" );

		wp_register_script(
			$this->assets['editor_script'],
			plugins_url( '../build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations( $this->assets['editor_script'], 'ctx-blocks', plugin_dir_path( __FILE__ ) . '../languages' );

		wp_register_style(
			$this->assets['editor_style'],
			plugins_url( '../build/index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);

		wp_register_style(
			$this->assets['style'],
			plugins_url( '../build/style-index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);

	
		
	}

}

   

