<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Nav extends Block {

    public array $blocks = [
        "nav"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {

		$styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		

		switch ($attributes['dataType']) {
			case 'posts':
				$attributes['data'] = $this->get_posts($attributes);
				break;
			
			case 'pages':
				$attributes['data'] = $this->get_pages($attributes);
				break;

			case 'categories':
				$attributes['data'] = $this->get_categories($attributes);
				break;

			default:
				$attributes['data'] = [];
				break;
		}

		

        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }


    private function get_posts($attributes) { 
        
        $args = array(
            'post_type' => 'post',
            'cat' => $attributes['parentCategory'],
            'posts_per_page' => $attributes['limit'],
            'orderby' => $attributes['orderBy'],
            'order'   => $attributes['order']
        );
        return Timber::get_posts( $args );
    }


    private function get_pages($attributes) {
        
        $args = array(
            'post_type' => 'page',
            'post_parent' => $attributes['parentPage'],
            'posts_per_page' => $attributes['limit']
        );
        return Timber::get_posts( $args );
        
    }

    private function get_categories($attributes) {
        $args = array(
            'post_type' => 'category',
            //'post_parent' => $parent
        );
        
        return get_categories( array('child_of' => $attributes['parentCategory']) );
        
    }



}
