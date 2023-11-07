<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;

use Timber\Timber;
use WP_Error;

class Svg extends Block {

    public array $blocks = [
        "svg"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) : void{
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {
        $path = get_attached_file( $attributes['id'] );
		if(!file_exists($path)) {
			error_log("SVG File $path not found", 0);
			return "";
		}
		
		$width = $attributes['width'] ? $attributes['width'].'px' : 'auto';
		$height = $attributes['height'] ? $attributes['height'].'px' : 'auto';
		$ret = "<div class='svg-wrapper' style=\"width: $width; height: $height\">";
		$ret .= "<style>";
		$ret .= "fill: {$attributes['fillColor']};";
		$ret .= "stroke: {$attributes['strokeColor']};";
		$ret .="</style>";
		$ret .= file_get_contents($path);
		$ret .= "</div>";
        return $ret;
    }

}