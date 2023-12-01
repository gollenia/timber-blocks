<?php
/**
 * Plugin Name:     CTX Blocks 
 * Description:     Additional Blocks for Gutenberg
 * Version:         2.0
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ctx-blocks
 *
 * @package         create-block
 */

/**
 * New Block registration making use of the new block.json format.
 */
function ctx_block_init() {

	

	$dir = __DIR__ . "/build/";

	if ( ! file_exists( $dir . "index.asset.php" ) ) {
		  return;
	}

	$script_asset = require( $dir . "index.asset.php" );

	if(is_admin()) {
		wp_register_script(
			"ctx-blocks-editor",
			plugins_url( '/build/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations( "ctx-blocks-editor", 'ctx-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
		
		wp_register_style(
			"ctx-blocks-editor-style",
			plugins_url( 'build/index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);
	}

	if(!is_admin()) {
		wp_register_style(
			"ctx-blocks-style",
			plugins_url( 'build/style-index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);
		wp_enqueue_script('ctx-blocks-frontend', plugin_dir_url(__FILE__) . "build/frontend.js", [], false, true);
	wp_enqueue_style('ctx-blocks-frontend', plugin_dir_url(__FILE__) . "build/frontend.css", [], false);
	}
	

	$blocks = [
		'card',
		'button',
		'conditional',
		'description-item',
		'description-list',
		'grid-column',
		'grid-row',
		'progress',
		'svg',
		'section',
		'image'
	];

	foreach($blocks as $block) {
		register_block_type( __DIR__ . '/build/blocks/'.$block );
	}
	
}

add_action( 'init', 'ctx_block_init' );




function ctx_blocks_load_textdomain() {
	load_plugin_textdomain('ctx-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
}
add_action( 'plugins_loaded', 'ctx_blocks_load_textdomain' );
