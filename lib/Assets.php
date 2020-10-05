<?php
namespace Contexis\Utils;

class Assets {

    public static function register() {
        

        add_action( 'init', function() {
            wp_register_style(
                'ctx_blocks_style',
                plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
                is_admin() ? array( 'wp-editor' ) : null,
                null
            );
            
            // Register block editor styles for backend.
            wp_register_style(
                'ctx_blocks_editor', // Handle.
                plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
                array( 'wp-edit-blocks' ), 
                null 
            );
        
            // Register block editor script for backend.
            wp_register_script(
                'ctx_blocks_editor', // Handle.
                plugins_url( 'dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
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
        
            
        } );

       

        return [
            'style'         => 'ctx_blocks_style',
            'editor_script' => 'ctx_blocks_editor',
            'editor_style'  => 'ctx_blocks_editor',
        ];
    
    }

   
}