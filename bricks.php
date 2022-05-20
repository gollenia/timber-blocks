<?php
/**
 * Plugin Name:     Bricks 
 * Description:     Common blocks using twig rendering
 * Version:         1.8.1
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     ctx-blocks
 *
 * @package         create-block
 */


define('BRICKS_DIR', plugin_dir_path( __FILE__ ));
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

$assets = Contexis\Utils\Assets::init();

// Add Twig functions
add_filter( 'timber/twig', ["Contexis\\Utils\\TwigExtend", "add_to_twig"] );

//Add translation
function bricks_plugin_textdomain() {
    load_plugin_textdomain('bricks', false, dirname( plugin_basename( __FILE__ ) ).'/languages');
}
add_action('plugins_loaded', 'bricks_plugin_textdomain');

$blocks_to_register = [
	"alert",
	"buttons/button-group",
	"buttons/button-spacer",
	"card",
	"description/description-item",
	"description/description-list",
	"grid/grid-column",
	"grid/grid-row",
	"image",
	"modal",
	"progress"
	
];


Contexis\Blocks\Block::init($assets, $blocks_to_register); 

Contexis\Blocks\Nav::init($assets);
Contexis\Blocks\Posts::init($assets);
Contexis\Blocks\Section::init($assets);
Contexis\Blocks\Button::init($assets);
