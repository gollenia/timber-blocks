<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Button extends Block {

    public array $blocks = [
        "buttons/button"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []): void {
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
        $attributes['id'] = $this->get_id();
        $attributes['content'] = $content;
		$styles = get_block_wrapper_attributes();
		$attributes['className'] = preg_match('/class="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['style'] = preg_match('/style="([^"]+)"/', $styles, $matches) ? $matches[1] : '';
		$attributes['script'] = $this->get_script($attributes['script'], $attributes['scriptTarget']);
		
		
        if($attributes['action'] == 'modal') {
			$footer = Timber::compile($this->get_template('ctx-blocks/modal'), $attributes);
			add_action('wp_footer', function() use (&$footer) {
				echo $footer; 
			});
		}
		
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }

	private function get_script($script, $target) {
		switch ($script) {
			case 'toggle':
				return 'document.getElementById("'.$target.'").classList.toggle("hidden");';
			case 'show':
				return 'document.getElementById("'.$target.'").classList.remove("hidden");';
			case 'hide':
				return 'document.getElementById("'.$target.'").classList.add("hidden");';
			case 'scroll':
				return 'document.getElementById("'.$target.'").scrollIntoView({behavior: "smooth"});';
			default:
				return '';
		}
	}

	private function get_id($len = 10) {
		
			$word = array_merge(range('a', 'z'), range('A', 'Z'));
			shuffle($word);
			return substr(implode($word), 0, $len);
		
	}


}
