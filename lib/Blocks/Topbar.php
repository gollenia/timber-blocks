<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Topbar extends Block {

    public array $blocks = [
        "topbar"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []): void {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {

		$attributes['menu'] = Timber::get_menu();
		$attributes = array_merge($attributes, Timber::context());
		$styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }


}
