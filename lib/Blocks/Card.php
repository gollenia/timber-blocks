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
		$dom->loadHTML($content);
		//var_dump($dom);
		$paragraphs = $dom->getElementsByTagName('p');
		for ($i = $paragraphs->length - 1; $i >= 0; $i --) {
			$nodePre = $paragraphs->item($i);
			$class = $nodePre->getAttribute('class');
			if(!strpos($class,'card__text')) { $class .= ' card__text'; }
			$nodeDiv = $dom->createElement("a", $nodePre->nodeValue);
			$nodeDiv->setAttribute('href', $attributes['url']);
			$nodeDiv->setAttribute('class', $class);
			$nodePre->parentNode->replaceChild($nodeDiv, $nodePre);
		}

		$heading = $dom->getElementsByTagName('h2');
		for ($i = $heading->length - 1; $i >= 0; $i --) {
			$nodePre = $heading->item($i);
			$class = $nodePre->getAttribute('class');
			if(!strpos($class,'card__title')) { $class .= ' card__title'; }
			$nodeDiv = $dom->createElement("a", $nodePre->nodeValue);
			$nodeDiv->setAttribute('href', $attributes['url']);
			$nodeDiv->setAttribute('class', $class);
			$nodePre->parentNode->replaceChild($nodeDiv, $nodePre);
		}

		$heading = $dom->getElementsByTagName('h4');
		for ($i = $heading->length - 1; $i >= 0; $i --) {
			$nodePre = $heading->item($i);
			$class = $nodePre->getAttribute('class');
			if(!strpos($class,'card__title')) { $class .= ' card__subtitle'; }
			$nodeDiv = $dom->createElement("a", $nodePre->nodeValue);
			$nodeDiv->setAttribute('href', $attributes['url']);
			$nodeDiv->setAttribute('class', $class);
			$nodePre->parentNode->replaceChild($nodeDiv, $nodePre);
		}

		return $dom->saveHTML();

	}


}
