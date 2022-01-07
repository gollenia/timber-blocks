<?php
/**
 * Plugin Name:     Bricks 
 * Description:     Common blocks using twig rendering
 * Version:         1.6
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ctx-blocks
 *
 * @package         create-block
 */



require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

$assets = Contexis\Utils\Assets::init();

// Add Twig functions
add_filter( 'timber/twig', ["Contexis\\Utils\\TwigExtend", "add_to_twig"] );


// Register Blocks (from old ctx-blocks)
$standard_blocks = new \Contexis\Blocks\Block($assets); 
$standard_blocks->register();

$nav_block = new \Contexis\Blocks\Nav($assets);
$nav_block->register();

$post_block = new \Contexis\Blocks\Posts($assets);
$post_block->register();

$button_block = new \Contexis\Blocks\Button($assets);
$button_block->register();
