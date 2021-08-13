<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Nav extends Block {

    public $blocks = [
        "nav"
    ];

    public function render($attributes, $content, $full_data) : string {
        $get_data = "get_" . $attributes['dataType'];
        $attributes['data'] = $this->{$get_data}($attributes);
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
