<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function ctx_blocks() { // phpcs:ignore
	wp_register_style(
		'ctx_blocks_style', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'ctx_blocks_editor', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	
	// Register block editor styles for backend.
	wp_register_style(
		'ctx_blocks_editor', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	// wp_localize_script(
	// 	'ctx_bootstrap-block-js',
	// 	'cgbGlobal', // Array containing dynamic data for a JS Global.
	// 	[
	// 		'pluginDirPath' => plugin_dir_path( __DIR__ ),
	// 		'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
	// 		// Add more data here that you want to access from `cgbGlobal` object.
	// 	]
	// );

	$register_array = [
		'style'         => 'ctx_blocks_style',
		'editor_script' => 'ctx_blocks_editor',
		'editor_style'  => 'ctx_blocks_editor',
	];

	register_block_type(
		'ctx-blocks/accordion-collection', $register_array
	);
	register_block_type(
		'ctx-blocks/accordion-item', $register_array
	);
	register_block_type(
		'ctx-blocks/button', $register_array
	);
	register_block_type(
		'ctx-blocks/card', $register_array
	);
	register_block_type(
		'ctx-blocks/alert', $register_array
	);
	register_block_type(
		'ctx-blocks/section', $register_array
	);
	register_block_type(
		'ctx-blocks/grid', $register_array
	);
	register_block_type(
		'ctx-blocks/column', $register_array
	);
	
}

function ctx_set_script_translations() {
	wp_set_script_translations( 'ctx-bootstrap-script', 'ctx-bootstrap', plugin_dir_path( __FILE__ ) . 'languages' );
}

add_action( 'init', 'ctx_blocks' );
add_action( 'init', 'ctx_set_script_translations' );


;
 
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