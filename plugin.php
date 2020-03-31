<?php
/**
 * Plugin Name: Blocks for UiKit
 * Plugin URI: https://github.com/gollenia/ctx-blocks/
 * Description: Use Uikit-Features in Gutenberg Block Editor
 * Author: Thomas Gollenia
 * Author URI: https://www.gollenia.at
 * Version: 0.0.8
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * @package CTX
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
