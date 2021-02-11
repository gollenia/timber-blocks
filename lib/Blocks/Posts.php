<?php
namespace Contexis\Blocks;

use WP_Query;
use Contexis\Blocks\Block;

class Posts extends Block {

    public $blocks = [
        "posts"
    ];

    public function render($attributes, $content, $full_data) : string {
       
        
        $attributes['posts'] = $this->get_posts($attributes);

        $template = $this->get_template($full_data->name);
        
        return \Timber\Timber::compile($template, $attributes);
        
    }
    

    

    public function render_old($attrs) {

 

        //$posts = $this->get_posts();

        $listClasses = join(" ", array_filter([
            "ctx-posts",
            "uk-child-width-1-" . $this->attributes['columnsSmall'] . "@s",
            "uk-child-width-1-" . $this->attributes['columnsMedium'] . "@m",
            "uk-child-width-1-" . $this->attributes['columnsLarge'] . "@l",
            !$this->attributes['imageBesidesText'] ? "uk-grid-match" : false
        ]));

        $itemClasses = join(" ", array_filter([
            "ctx-post uk-flex uk-card",
            !$this->attributes['imageBesidesText'] ? 'uk-flex-column' : '',
            "uk-text-" . $this->attributes['textAlignment'],
            $this->attributes['dropShadow'] ? "uk-card-hover" : false,
            $this->attributes['excerptLength'] == 0 && $this->attributes['imageBesidesText'] ? 'uk-flex-middle' : false
        ]));

        $rendered_object = '<div class="' . $listClasses . '" uk-grid>';

        foreach($posts as $post) {
            $rendered_object .= '<div><a class="' . $itemClasses . '" href="' . get_permalink($post) . '">';
            
            if($this->attributes["showImages"]) {
                $rendered_object .= $this->get_images($post);
            }
            
            $rendered_object .= '<div class="ctx-post-content">';
            $rendered_object .=  '<h5>' . $post->post_title . '</h5>';
            $rendered_object .=  '<time datetime="' . date_i18n("c", $post->post_date) . '">' . date_i18n("j. F Y", $post->post_date) . '</time>';
            if($this->attributes['excerptLength'] > 0) {
                $rendered_object .=  '<p>' . wp_trim_words($post->post_excerpt, $this->attributes['excerptLength']) . '</p>';
            } else {
                $rendered_object .=  '<p>' . wp_trim_words($post->post_content, $this->attributes['excerptLength']) . '</p>';
            }
            $rendered_object .= '</div>';
            $rendered_object .= '</div></a>';
        }

        $rendered_object .= '</div>';
        
        return $rendered_object;
        
    }

    private function get_posts($attributes) {
        $args = array(
            'cat' => $attributes['categories'],
            'posts_per_page' => $attributes['limit'],
            'orderby' => $attributes['orderBy'],
            'order'   => $attributes['order']
        );
        $query = new \Timber\PostQuery($args);
        return $query;
    }


    private function get_images($post) {

        $classes = join(" ", array_filter([
            $this->attributes['roundImages'] ? "uk-border-circle" : false,
            $this->attributes['imageBesidesText'] ? "uk-flex-none uk-margin-right" : false,
            !$this->attributes['roundImages'] && !$this->attributes['imageBesidesText'] ?  "uk-cover-container uk-height-medium" : false
        ]));

        $attrs = join(" ", array_filter([
            !$this->attributes['roundImages'] && !$this->attributes['imageBesidesText'] ?  "uk-cover" : "uk-img"
        ]));

        $image = '<div  style="width: ' . $this->attributes['imageSize'] . '%" class="' . $classes . '">' ;
        if($this->attributes['roundImages']) {
            $image .= '<img class="uk-border-circle" data-src="' . get_the_post_thumbnail_url( $post, 'qlarge' ) . '"'
                . $attrs . '>';
            
        } else {
            $image .= '<img class="" src="' . get_the_post_thumbnail_url( $post, 'large' ) . '"'
                . $attrs . '>';
        }
        $image .= '</div>';
        return $image;
        
    }



}
