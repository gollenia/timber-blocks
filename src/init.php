<?php
 /**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package ctx-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function ctx_blocks() { // phpcs:ignore
	wp_register_style(
		'ctx_blocks_style', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
	
	// Register block editor styles for backend.
	wp_register_style(
		'ctx_blocks_editor', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'ctx_blocks_editor', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `ctxGlobal` object.
	wp_localize_script(
		'ctx_blocks_editor',
		'ctxGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	$register_array = [
		'style'         => 'ctx_blocks_style',
		'editor_script' => 'ctx_blocks_editor',
		'editor_style'  => 'ctx_blocks_editor',
	];

	$blocks = [
		'ctx-blocks/accordion-collection',
		'ctx-blocks/accordion-item',
		'ctx-blocks/description-list',
		'ctx-blocks/description-item',
		'ctx-blocks/button',
		'ctx-blocks/card',
		'ctx-blocks/progress',
		'ctx-blocks/columns',
		'ctx-blocks/alert',
		'ctx-blocks/section',
		'ctx-blocks/grid-row',
		'ctx-blocks/grid-column',
		'ctx-blocks/image',
	];

	foreach ($blocks as $key => $value) {
		register_block_type(
			$value, $register_array
		);
	}
	
}

function ctx_set_script_translations() {
	wp_set_script_translations( 'ctx_blocks_editor', 'ctxblocks', plugin_dir_path( __FILE__ ) . 'languages' );
}

add_action( 'init', 'ctx_blocks' );
add_action( 'init', 'ctx_set_script_translations' );

add_action( 'after_setup_theme', 'image_sizes' );
function image_sizes() {
	add_image_size( 'xsmall', 350 );  // 1/4 columns
	add_image_size( 'small', 500 );		// 1/3 columns
	add_image_size( 'medium', 720 );	// 1/2 column
	add_image_size( 'large', 1300 );	// 1/1 column
	add_image_size( 'hullhd', 1920 );	// full hd
	add_image_size( 'wqhd', 2560 );	//wqhd
	//add_image_size( 'fourk', 4000 );	//4k
	add_image_size( 'qsmall', 150, 150, true );
	add_image_size( 'qmedium',300, 300, true );
	add_image_size( 'qlarge', 500, 500, true );
	add_image_size( 'qxlarge', 800, 800, true );
}

add_filter( 'image_size_names_choose', 'customImageSizes' );

function customImageSizes($sizes) {
	return array_merge( $sizes, array(
		'xsmall' => __( 'Winzig' ),
		'small' => __( 'Klein' ),
		'medium' => __( 'Mittel' ),
		'large' => __( 'Groß' ),
		'fullhd' => __( 'Full HD (1080p)' ),
		'wqhd' => __( 'WQHD (1440p)' ),
		'qsmall' => __( 'Klein Quadratisch' ),
		'qmedium' => __( 'Mittel Quadratisch' ),
		'qlarge' => __( 'Groß Quadratisch' ),
		'qxlarge' => __( 'Riesig Quadratisch' ),
	) );
}
 
// add_filter( 'allowed_block_types', 'ctx_keep_plugins_blocks' );
 
// function ctx_keep_plugins_blocks( $allowed_blocks ) {
 
// 	$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
 

 
// 	// now $registered_blocks contains only blocks registered by plugins, but we need keys only
// 	$registered_blocks = array_keys( $registered_blocks );

// 	// merge the whitelist with plugins blocks
// 	return array_merge( array(
// 		'core/image',
// 		'core/paragraph',
// 		'core/heading',
// 		'core/list'
// 	), $registered_blocks );
 
// }

