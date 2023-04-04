<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Button extends Block {

    public array $blocks = [
        "buttons/button"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

	/**
	 * Render function that conditionally adds a modal to the footer
	 *
	 * @param [type] $attributes
	 * @param [type] $content
	 * @param [type] $full_data
	 * @return string
	 */
    public function render($attributes, $content, $full_data) : string {
        $attributes['id'] = uniqid();
        $attributes['content'] = $content;

		$styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		
	
        if($attributes['hasModal']) {
			$footer = Timber::compile($this->get_template('ctx-blocks/modal'), $attributes);
			add_action('wp_footer', function() use (&$footer) {
				echo $footer; 
			});
		}
		
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }


}
