<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function ctx_bootstrap_block_assets() { // phpcs:ignore
	wp_register_style(
		'ctx_bootstrap-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'ctx_bootstrap-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	

	// Register block editor styles for backend.
	wp_register_style(
		'ctx_bootstrap-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'ctx_bootstrap-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	register_block_type(
		'ctx/block-contexis-bootstrap', array(
			'style'         => 'ctx_bootstrap-style-css',
			'editor_script' => 'ctx_bootstrap-block-js',
			'editor_style'  => 'ctx_bootstrap-block-editor-css',
		)
	);
}

function ctx_set_script_translations() {
	wp_set_script_translations( 'ctx-bootstrap-script', 'ctx-bootstrap', plugin_dir_path( __FILE__ ) . 'languages' );
}

add_action( 'init', 'ctx_bootstrap_block_assets' );
add_action( 'init', 'ctx_set_script_translations' );