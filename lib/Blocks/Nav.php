<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use WP_Query;


class Nav extends Block {

    public $blocks = [
        "nav"
    ];

    public function render($attributes, $content, $full_data) : string {
       
        $get_data = "get_" . $attributes['dataType'];
        
        $attributes['data'] = $this->{$get_data}($attributes);

        $template = $this->get_template($full_data->name);

        if( WP_DEBUG == true && !wp_is_json_request() ) { 
            echo "<script>console.log(" . json_encode($attributes) . ");</script>";
        }
        
        return \Timber\Timber::compile($template, $attributes);

        
        
    }


    private function get_posts($attributes) { 
        $args = array(
            'post_type' => 'post',
            'cat' => $attributes['parentCategory'],
            'posts_per_page' => $attributes['limit'],
            'orderby' => $attributes['orderBy'],
            'order'   => $attributes['order']
        );
        $query = new WP_Query($args);
        return $query->posts;
    }

    private function get_pages($attributes) {
        
        $args = array(
            'post_type' => 'page',
            'post_parent' => $attributes['parentPage'],
            'posts_per_page' => $attributes['limit']
        );
        $query = new WP_Query($args);
        
        return $query->posts;
        
    }

    private function get_categories($attributes) {
        $args = array(
            'post_type' => 'category',
            //'post_parent' => $parent
        );
        
        return get_categories( array('child_of' => $attributes['parentCategory']) );
        
    }



}
