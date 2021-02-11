<?php

namespace Contexis\Blocks;

interface BlockInterface
{
    public function __construct($args);
    public function register() : void;
    public function render($attributes, $content, $full_data) : string;
    public function get_template($name) : string;
    public function get_meta($block);
}

class Block implements BlockInterface {

    public $blocks = [
        "accordion/accordion-collection",
        "accordion/accordion-item",
        "alert",
        "button",
        "card",
        //"columns",
        "description/description-item",
        "description/description-list",
        "grid/grid-column",
        "grid/grid-row",
        "image",
        "modal",
        //"nav",
        //"posts",
        "progress",
        "section",
    ];

    public $blocks_to_register = [];

    public $args;

    public function __construct($args) {

        $this->args = $args;
        
        foreach($this->blocks as $block) {
            $meta = $this->get_meta($block);
            if($meta) {
                array_push($this->blocks_to_register, $meta); 
            }
        }
    }

    public function get_meta($block) :array{
        $filename = plugin_dir_path( __FILE__ ) . "../../src/blocks/" . $block . "/block.json";
        
        if(!file_exists($filename)) {
            
            return false;
        }
        $string = file_get_contents($filename);
        return json_decode($string, true);
    }

    public function register() : void {
        $blocks = $this->blocks_to_register;
        $args = $this->args;
        $args['render_callback'] = [$this, "render"];
        
        
        add_action( 'init', function() use(&$blocks, &$args){
            for($i = 0; $i < count($blocks); $i++) {
                $args['attributes'] = $blocks[$i]['attributes'];
                register_block_type(
                    $blocks[$i]["name"], $args
                );
            }
            
        });    
    }

    public function render($attributes, $content, $full_data) : string {
        $template = $this->get_template($full_data->name);

        $attributes['content'] = $content;

        if(count($full_data->parsed_block['innerBlocks']) > 0) {
            $attributes['children'] = $full_data->parsed_block['innerBlocks'];
        }
        
        return \Timber\Timber::compile($template, $attributes); 
    }

    public function get_template($name) : string {
        $filename = substr($name, strpos($name, "/")+1) . ".twig";
        
        if(file_exists(get_template_directory() . "/plugins/ctx-blocks/" . $filename)) {
            return get_template_directory() . '/plugins/ctx-blocks/' . $filename;
        }

        return plugin_dir_path( __FILE__ ) . '../../templates/' . $filename;
    }

}