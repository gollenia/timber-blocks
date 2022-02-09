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

    public function render($attributes, $content, $full_data) : string {
        $attributes['id'] = uniqid();
        $attributes['content'] = $content;
	
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
