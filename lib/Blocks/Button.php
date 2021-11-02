<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Button extends Block {

    public $blocks = [
        "buttons/button"
    ];

    public function render($attributes, $content, $full_data) : string {
        $attributes['id'] = uniqid();
        $attributes['content'] = $content;
        $footer = Timber::compile($this->get_template('ctx-bloxks/modal'), $attributes);
        add_action('wp_footer', function() use (&$footer) {
            echo $footer; 
        });
        
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
