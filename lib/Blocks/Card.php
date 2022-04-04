<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use DOMDocument;
use Timber\Timber;

class Card extends Block {

    public array $blocks = [
        "card"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {
        $attributes['id'] = uniqid();

		$attributes['content'] = $this->set_content($attributes, $content);
        
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }

	public function set_content($attributes, $content) {
		if($attributes['url'] == '') {
			return $content;
		}

		$dom = new DOMDocument();
		$dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));
		//var_dump($dom);
		$paragraphs = $dom->getElementsByTagName('h2');
		for ($i = $paragraphs->length - 1; $i >= 0; $i --) {
			$nodePre = $paragraphs->item($i);
			
			$link = $dom->createElement("a");
			$link->setAttribute('class', "card__hidden-link");
			$link->setAttribute('href', $attributes['url']);
			//$nodePre->nodeValue = "";
			$nodePre->appendChild($link);
		}

		

		return $dom->saveHTML();

	}


}
