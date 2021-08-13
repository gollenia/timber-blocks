<?php
namespace Contexis\Blocks;

use Contexis\Blocks\Block;
Use Timber\Timber;

class Posts extends Block {

    public $blocks = [
        "posts"
    ];

    public function render($attributes, $content, $full_data) : string {
        $attributes['posts'] = $this->get_posts($attributes);
        $template = $this->get_template($full_data->name);
        return \Timber\Timber::compile($template, $attributes);
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
