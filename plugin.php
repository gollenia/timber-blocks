<?php
/**
 * Plugin Name: Blocks for UiKit
 * Plugin URI: https://github.com/gollenia/ctx-blocks/
 * Description: Use Uikit-Features in Gutenberg Block Editor
 * Author: Thomas Gollenia
 * Author URI: https://www.gollenia.at
 * Version: 1.0.1
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * @package CTX
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'lib/classes/Assets.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/classes/ImageSizes.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/classes/Block.php';

Contexis\Blocks\ImageSizes::register();
$args = Contexis\Blocks\Assets::register();


$blocks = [
	'ctx-blocks/accordion-collection',
	'ctx-blocks/accordion-item',
	'ctx-blocks/description-list',
	'ctx-blocks/description-item',
	'ctx-blocks/button',
	'ctx-blocks/card',
	'ctx-blocks/progress',
	'ctx-blocks/modal',
	'ctx-blocks/columns',
	'ctx-blocks/alert',
	'ctx-blocks/section',
	'ctx-blocks/grid-row',
	'ctx-blocks/grid-column',
	'ctx-blocks/image',
];

Contexis\Blocks\Block::registerSimpleBlocks($blocks, $args);
Contexis\Blocks\Block::registerDynamicBlocks($args);

