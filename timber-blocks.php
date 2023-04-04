<?php
/**
 * Plugin Name:     Timber Blocks 
 * Description:     Render Bocks with twig
 * Version:         1.9.1
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

//Add translation
function timberblocks_plugin_textdomain() {
    load_plugin_textdomain('timber-blocks', false, dirname( plugin_basename( __FILE__ ) ).'/languages');
}
add_action('plugins_loaded', 'timberblocks_plugin_textdomain');

function timberblocks_theme_support() {
    remove_theme_support('core-block-patterns');
}
add_action('after_setup_theme', 'timberblocks_theme_support');

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
	"modal",  //deprecated
	"progress",
	"header/header",
	"header/header-content",
	"cover"
];



Contexis\Blocks\Block::init($assets, $blocks_to_register); 

Contexis\Blocks\Nav::init($assets);
Contexis\Blocks\Conditional::init($assets);
Contexis\Blocks\Posts::init($assets);
Contexis\Blocks\Section::init($assets);	//deprecated
Contexis\Blocks\Button::init($assets);
Contexis\Blocks\Topbar::init($assets);
Contexis\Blocks\CoreBlock::init($assets);
