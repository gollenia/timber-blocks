<?php
/**
 * Plugin Name: Blocks for Tailwind
 * Plugin URI: https://github.com/gollenia/ctx-blocks/
 * Description: Twig-powered blocks with TailwindCSS
 * Author: Thomas Gollenia
 * Author URI: https://www.gollenia.at
 * Version: 1.1.9
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * @package CTX
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';



Contexis\Utils\ImageSizes::register();
$args = Contexis\Utils\Assets::register();



$standard_blocks = new \Contexis\Blocks\Block($args); 
$standard_blocks->register();


$nav_block = new \Contexis\Blocks\Nav($args);
$nav_block->register();

$post_block = new \Contexis\Blocks\Posts($args);
$post_block->register();