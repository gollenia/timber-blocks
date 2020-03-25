<?php
/**
 * Plugin Name: CTX Blocks for UiKit
 * Plugin URI: https://github.com/gollenia/ctx-blocks/
 * Description: Use Uikit-Features in Gutenberg Block Editor
 * Author: Thomas Gollenia
 * Author URI: https://www.gollenia.at
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
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
