<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Topbar extends Block {

    public array $blocks = [
        "topbar"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {

		$attributes['menu'] = Timber::get_menu();
		$attributes = array_merge($attributes, Timber::context());
		
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }


}
