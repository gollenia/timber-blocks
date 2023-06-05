<?php
namespace Contexis\Blocks;

use Contexis\Blocks\Block;
Use Timber\Timber;
use Contexis\Utils\Helper;

class Posts extends Block {

    public array $blocks = [
        "posts"
    ];

    public function render($attributes, $content, $full_data) : string {
		
        $attributes['posts'] = $this->get_posts($attributes);
		
		$styles = get_block_wrapper_attributes();
		
		$styles = '';
		if ($full_data->parsed_block['attrs']) $styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		
		$attributes['blockGap'] = Helper::get_css_var(Helper::get_array_value($full_data->parsed_block['attrs'], "style.spacing.blockGap", ''));
        
        $template = $this->get_template($full_data->name);
        return \Timber\Timber::compile($template, $attributes);
    }

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}
    

    private function get_posts($attributes) {
        $args = array(
            'cat' => $attributes['category'],
            'posts_per_page' => $attributes['limit'],
            'orderby' => $attributes['orderBy'],
            'order'   => $attributes['order']
        );
        return Timber::get_posts( $args );
    }

}
