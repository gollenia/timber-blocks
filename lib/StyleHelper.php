<?php
namespace Contexis\Utils;

class StyleHelper {

	var $style = [
		'margin' => [],
			'padding' => '',
			'radius' => '',
			'margin' => '',
			'border' => '',
			'color' => '',
			'background' => '',
			'font' => '',
			'gap' => ''
	];

	public static function process($style) {
		
		if(gettype($style) != 'array') return [];
		if(empty($style)) return [];

		$instance = new self();

		//var_dump(json_encode($style));

		if(key_exists('spacing', $style)) {
			
			foreach($style['spacing'] as $key => $value) {
				if($key == 'blockGap') $key = 'gap';
				$instance->style[$key] = $instance->spacing($value, $key);
			}
		}

		if(key_exists('border', $style)) {
			$instance->border($style['border']);
		}

		if(key_exists('other', $style)) {

				$instance->style[$key] = $instance->other($style['other']);
			
		}

		if(key_exists('blockGap', $style)) {
			$instance->style['gap'] = 'gap: ' . $style['blockGap'] . ';';
		}

		return $instance->style;
	}

	public function spacing(array|string $object, string $type) {
		$result = '';

		if(gettype($object) == 'string') {
			$res = str_replace('var:', '', $object);
			$result .= 'var(--wp--' . str_replace('|', '--',$res) . '); ';
			return $result;
		}

		foreach($object as $key => $value) {
			if(preg_match('/(em|rem|px)/', $value)) {
				$result .= "$type-$key: $value; ";
				
				continue;
			}
			$res = str_replace('var:', '', $value);
			$result .= $type . '-' . $key . ': var(--wp--' . str_replace('|', '--',$res) . '); ';
		}

		return $result;
		
	}

	public function border(array $object) {
		$result = '';

		if(key_exists('radius', $object)) {
			$this->radius($object['radius'], 'radius');
		}

		//var_dump($object);

		$directions = ['top', 'left', 'right', 'bottom'];

		foreach($directions as $key) {
			if(key_exists($key, $object)) {
				$border = $object[$key];
				$result .= 'border-' . $key . ': ' . ($border['width'] ?? '') . ' ' . ($border['style'] ?? '') . ' ' . ($border['color'] ?? '') . '; ';
			}
		}
		$this->style['border'] = $result;
		
	}

	public function radius(array $object, string $type) {
		$result = '';
		
		foreach($object as $key => $value) {
			
			switch ($key) {
				case 'topRight':
					$result .= "border-top-right-radius: $value; ";
					break;
				case 'topLeft':
					$result .= "border-top-left-radius: $value; ";
					break;
				case 'bottomRight':
					$result .= "border-bottom-right-radius: $value; ";
					break;
				case 'bottomLeft':
					$result .= "border-bottom-left-radius: $value; ";
					break;
				default:
					break;
			}
		}
		$this->style['radius'] = $result;
		
	}

	public function other(array $object) {
		//var_dump($object);
		foreach($object as $key => $value) {
			
			switch ($key) {
				case 'blockGap':
					$this->style['gap'] = "gap: $value; ";
					break;
				
				default:
					break;
			}
		}
		
		
	}



}