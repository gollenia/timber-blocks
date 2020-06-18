<?php
namespace Contexis\Blocks\Dynamic;

use WP_Query;

class Posts {

    private $name = "ctx-blocks/posts";
    // Attributes of Block
    private $attributes = [
          'columnsSmall' => 1,
          'columnsMedium' => 2,
          'columnsLarge' => 3,
          'showImages' => true,
          'roundImages' => false,
          'imageSize' => 100,
          'imageBesidesText' => false,
          'limit' => 6,
          'order' => "desc",
          'orderBy' => 'date',
          'categories' => 0,
          'excerptLength' => 20,
          'textAlignment' => 'left'
    ];
    

    public function __construct($args) {
        
        $args['render_callback'] = [$this, "render"];
        register_block_type(
            $this->name, $args
        );
    }

    public function render($attrs) {

        $this->set_attributes($attrs);

        $posts = $this->get_posts();

        $listClasses = join(" ", array_filter([
            "ctx-posts",
            "uk-child-width-1-" . $this->attributes['columnsSmall'] . "@s",
            "uk-child-width-1-" . $this->attributes['columnsMedium'] . "@m",
            "uk-child-width-1-" . $this->attributes['columnsLarge'] . "@l",
            !$this->attributes['imageBesidesText'] ? "uk-grid-match" : false
        ]));

        $itemClasses = join(" ", array_filter([
            "ctx-post uk-flex",
            !$this->attributes['imageBesidesText'] ? 'uk-flex-column' : '',
            "uk-text-" . $this->attributes['textAlignment']
        ]));

        $rendered_object = '<div class="' . $listClasses . '" uk-grid>';

        foreach($posts as $post) {
            $rendered_object .= '<a class="' . $itemClasses . '" href="' . get_permalink($post) . '"><div class="uk-card uk-card-default">';
            
            if($this->attributes["showImages"]) {
                $rendered_object .= $this->get_images($post);
            }
            
            $rendered_object .= '<div class="ctx-post-content">';
            $rendered_object .=  '<h5>' . $post->post_title . '</h5>';
            $rendered_object .=  '<time datetime="' . date_i18n("c", $post->post_date) . '">' . date_i18n("j. F Y", $post->post_date) . '</time>';
            $rendered_object .=  '<p>' . wp_trim_words($post->post_excerpt, $this->attributes['excerptLength']) . '</p>';
            $rendered_object .= '</div>';
            $rendered_object .= '</div></a>';
        }

        $rendered_object .= '</div>';
        
        return $rendered_object;

        
        
    }

    private function set_attributes($attributes) {
        foreach($attributes as $key => $value) {
            $this->attributes[$key] = $value;
        }
        
    }

    private function get_posts() {
        $args = array(
            'cat' => $this->attributes['categories'],
            'posts_per_page' => $this->attributes['limit'],
            'orderby' => $this->attributes['orderBy'],
            'order'   => $this->attributes['order']
        );
        $query = new WP_Query($args);
        return $query->posts;
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
