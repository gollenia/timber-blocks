<?php
namespace Contexis\Blocks\Dynamic;

use WP_Query;

class Nav {

    private $name = "ctx-blocks/nav";

    // Attributes of Block
    private $attributes = [
        'className' => ['default' => '', 'type' => 'string'],
        'dropDown' => ['default' => false,'type' => 'bool'],
        'depth' => ['default' => '1','type' => 'number'],
        "showIcons" => [ "default" => false, "type" => "bool"],
        "isPrimary" => [ "default" => false, "type" => "bool"],
        "showActive" => [ "default" => true, "type" => "bool"],
        "parentPage" => [ "default" => 0, 'type' => 'number'],
        "parentCategory" => [ "default" => 0, 'type' => 'number'],
        "dataType" => [ "default" => "posts", 'type' => 'string'],
        "limit" => [ "default" => 10, 'type' => 'number'],
        "order" => [ "default" => "desc", 'type' => 'string'],
        "orderBy" => [ "default" => "date", 'type' => 'string'],
        "textAlignment" => [ "default" => "left", 'type' => 'string'],
        "hiddenMobile" => [ "default" => false, 'type' => 'bool'],
        "hiddenDesktop" => [ "default" => false, 'type' => 'bool']
    ];
    

    public function __construct($args) {
        $args['render_callback'] = [$this, "render"];
        $args['attributes'] = $this->attributes;
        add_action( 'init', function() use(&$block, &$args){
            register_block_type(
                "ctx-blocks/nav", $args
            );
    });
    }

    public function render($attrs) {

        $this->set_attributes($attrs);

        //$posts = $this->get_posts();

       
        $listClasses = join(" ", array_filter([
            'uk-nav',
            !$this->attributes['dropDown'] ? false : 'uk-nav-parent-icon',
            $this->attributes['isPrimary'] ? "uk-nav-primary" : "uk-nav-default",
            $this->attributes['showIcons'] ? "ctx-has-icons" : false,
            $this->attributes['textAlignment'] == 'center' ? 'uk-nav-center' : false
        ]));

        $rendered_object = '<ul class="' . $listClasses . '">';
        if($this->attributes['dropDown']) {
            $rendered_object = '<ul class="' . $listClasses . '" uk-nav>';
        }
        switch ($attrs['dataType']) {
            case 'pages':
                $rendered_object .= $this->render_pages();
                break;

            case 'posts':
                $rendered_object .= $this->render_posts();
                break;

            case 'categories':
                $rendered_object .= $this->render_categories();
                break;
            
            default:
                $rendered_object .= "Da ist ein sehr seltsamer Fehler passiert.";
                break;
        }

        $rendered_object .= '</ul>';
        
        return $rendered_object;

        
        
    }

    private function set_attributes($attributes) {
        foreach($attributes as $key => $value) {
            $this->attributes[$key] = $value;
        }
        
    }

    private function render_posts() {
        $rendered_posts = "";
        $root = $this->get_posts();
        foreach($root as $post) {
            $class = "";
            
            if (get_the_ID() === $post->ID && $this->attributes['showActive']) {
                $class .= "uk-active";
            }

            $rendered_posts .= '<li class="' . $class . '"><a href="' . get_permalink($post) . '">' . $post->post_title . '</a>';


            $rendered_posts .= '</li>';
        }
        return $rendered_posts;
    }

    private function render_pages() {
        $rendered_pages = "";
        $root = $this->get_pages($this->attributes['parentPage']);
        foreach($root as $page) {
            $class = "";
            
            if (get_the_ID() === $page->ID && $this->attributes['showActive']) {
                $class .= "uk-active";
            }

            $children = false;
            if ($this->attributes['depth'] > 1) {
                $children = $this->get_pages($page->ID);
            }

            if($children) {
                $class .= " uk-parent";
            }

            $rendered_pages .= '<li class="' . $class . '"><a href="' . ($children ? '#' : get_permalink($page)) . '">' . $page->post_title . '</a>';

            if($children) {
                $rendered_pages .= '<ul class="uk-nav-sub">';
                foreach($children as $child) {
                    $subclass="";
                    if (get_the_ID() === $page->ID && $this->attributes['showActive']) {
                        $subclass .= "uk-active";
                    }
                    $rendered_pages .= '<li class="' . $subclass . '"><a href="' . get_permalink($child) . '">' . $child->post_title . '</a>';
                }
                $rendered_pages .= '</ul>';
            }

            $rendered_pages .= '</li>';
        }
        return $rendered_pages;
    }


    private function render_categories() {
        $rendered_pages = "";
        $root = $this->get_categories($this->attributes['parentCategory']);
        foreach($root as $category) {
            $class = "";
            
            $children = false;
            if ($this->attributes['depth'] > 1) {
                $children = $this->get_categories($category->cat_ID);
            }

            if($children) {
                $class .= " uk-parent";
            }

            $rendered_pages .= '<li class="' . $class . '"><a href="' . ($children ? '#' : get_category_link($category)) . '">' . $category->name . '</a>';
            
            if($children) {
                $rendered_pages .= '<ul class="uk-nav-sub">';
                foreach($children as $child) {
                    $subclass="";
                    if (get_the_ID() === $category->ID && $this->attributes['showActive']) {
                        $subclass .= "uk-active";
                    }
                    $rendered_pages .= '<li class="' . $subclass . '"><a href="' . get_category_link($child) . '">' . $child->post_title . '</a>';
                }
                $rendered_pages .= '</ul>';
            }

            $rendered_pages .= '</li>';
        }
        return $rendered_pages;
    }

    private function get_posts() {
        $args = array(
            'post_type' => 'post',
            'cat' => $this->attributes['parentCategory'],
            'posts_per_page' => $this->attributes['limit'],
            'orderby' => $this->attributes['orderBy'],
            'order'   => $this->attributes['order']
        );
        $query = new WP_Query($args);
        return $query->posts;
    }

    private function get_pages($parent = 0) {
        $args = array(
            'post_type' => 'page',
            'post_parent' => $parent
        );
        $query = new WP_Query($args);
        
        return $query->posts;
        
    }

    private function get_categories($parent = 0) {
        $args = array(
            'post_type' => 'category',
            //'post_parent' => $parent
        );
        return get_categories( array('child_of' => $parent) );
        

        
    }



}
