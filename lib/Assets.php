<?php
namespace Contexis\Utils;

class Assets {

	public $assets = [
		'style'         => 'bricks-block',
		'editor_script' => 'bricks-block-editor',
		'editor_style'  => 'bricks-block-editor',
	];

    public static function init() {
        
		$instance = new self;

        add_action( 'init', [$instance, "register_assets"] );

		add_action('admin_enqueue_scripts', function() {
			wp_enqueue_script('bricks-block-filter', plugin_dir_url(__FILE__) . "../assets/admin.js", [], false, true);
		});

       	add_action('init', function() {
        	wp_enqueue_script('bricks-frontend', plugin_dir_url(__FILE__) . "../assets/frontend.js", [], false, true);
    	});

		return $instance->assets;
    
    }

    public function register_assets() {
		$dir = __DIR__ . "/../assets/";

		if ( ! file_exists( $dir . "index.asset.php" ) ) {
			  throw new \Error(
					  'You need to run `npm start` or `npm run build` for the bricks blocks first.'
			 );
		}

		$script_asset = require( $dir . "index.asset.php" );

		wp_register_script(
			$this->assets['editor_script'],
			plugins_url( '../assets/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations( $this->assets['editor_script'], 'ctx-blocks', plugin_dir_path( __FILE__ ) . '../languages' );

		wp_register_style(
			$this->assets['editor_style'],
			plugins_url( '../assets/index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);

		wp_register_style(
			$this->assets['style'],
			plugins_url( '../assets/style-index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);

		
	}

}

   

