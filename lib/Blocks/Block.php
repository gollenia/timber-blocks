<?php

namespace Contexis\Blocks;

use Contexis\Utils\Helper;

interface BlockInterface
{
    public function __construct(\Contexis\Utils\Assets $assets, array $blocks = []);
    public function register() : void;
    public function render($attributes, $content, $full_data);
    public function get_template($name) : string;
    public function get_meta($block);
}

class Block implements BlockInterface {

    public array $blocks = [];

    public $blocks_to_register = [];

    public $args;

    public function __construct(\Contexis\Utils\Assets $assets, array $blocks = []) {

		if(empty($blocks) && empty($this->blocks)) return;
		
		if(!empty($blocks)) $this->blocks = $blocks;
        
        foreach($this->blocks as $block) {
            $meta = array_merge($assets->get(), $this->get_meta($block));
			
			$meta['render_callback'] = [$this, "render"];
            if($meta) {
                array_push($this->blocks_to_register, $meta); 
            }
        }
    }

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets, $blocks);
		$instance->register();
	}

    public function get_meta($block) :array{
        $filename = plugin_dir_path( __FILE__ ) . "../../src/blocks/" . $block . "/block.json";
        
        if(!file_exists($filename)) return [];

        $string = file_get_contents($filename);
        return json_decode($string, true);
    }

    public function register() : void {
        $blocks = $this->blocks_to_register;
        $args = $this->args;
        $args['render_callback'] = [$this, "render"];
        
        add_action( 'init', function() use(&$blocks, &$args){

            for($i = 0; $i < count($blocks); $i++) {	
				if(empty($blocks[$i]) || !key_exists('name', $blocks[$i])) continue;		
                register_block_type(
                    $blocks[$i]["name"], $blocks[$i]
                );
            }
            
        });    
    }

	

    public function render($attributes, $content, $full_data) {
        $template = $this->get_template($full_data->name);
		
        if(!$template) return;
		$styles = '';
		
		if ($full_data->parsed_block['attrs']) $styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		
		$attributes['content'] = $content;
        if(count($full_data->parsed_block['innerBlocks']) > 0) {
            $attributes['children'] = $full_data->parsed_block['innerBlocks'];
			$attributes['blockGap'] = Helper::get_array_value(Helper::get_css_var($full_data->parsed_block['attrs'], "style.spacing.blockGap"), '');
        }
        
        return \Timber\Timber::compile($template, $attributes); 
    }

    public function get_template($name) : string {
        $filename = substr($name, strpos($name, "/")+1) . ".twig";
		

		if(file_exists(get_stylesheet_directory() . "/plugins/timber-blocks/" . $filename)) {
            return get_stylesheet_directory() . '/plugins/timber-blocks/' . $filename;
        }

        if(file_exists(get_template_directory() . "/plugins/timber-blocks/" . $filename)) {
            return get_template_directory() . '/plugins/timber-blocks/' . $filename;
        }

        if(file_exists(plugin_dir_path( __FILE__ ) . '../../templates/' . $filename)) {
            return plugin_dir_path( __FILE__ ) . '../../templates/' . $filename;
        }

        return false;
    }

}