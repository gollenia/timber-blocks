<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;

use Timber\Timber;

class Section extends Block {

    public array $blocks = [
        "section"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {
        if(!$this->get_condition($attributes)) return "";
		$attributes['content'] = $content;
		$styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		
		$attributes['from'] = strtotime($attributes['fromDate']);
		$attributes['to'] = strtotime($attributes['toDate']);
		$attributes['now'] = time();
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }

	public function get_condition($attributes) {
		$from = strtotime($attributes['fromDate']);
		$to = strtotime($attributes['toDate']);
		if(!$from && !$to) return true;
		if($from && !$to && $from > time()) return false;
		if($from && !$to && $from < time()) return true;
		if(!$from && $to && $to < time()) return false;
		if(!$from && $to && $to > time()) return true;
		if( $from > time() || $to < time() ) return false;
		return true;
	}
}