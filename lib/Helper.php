<?php
namespace Contexis\Utils;

class Helper {

	
	public static function get_array_value($data, $key, $default = null) {
		if (!$data || !is_string($key) || empty($key) || !count($data)) {
			return $default;
		}

		
	
		if (strpos($key, '.') !== false) {
			$keys = explode('.', $key);
			foreach ($keys as $innerKey) {
				if (!array_key_exists($innerKey, $data)) {
					return $default;
				}
				$data = $data[$innerKey];
			}
			return $data;
		}
		return array_key_exists($key, $data) ? $data[$key] : $default;
	}


	public static function get_css_var($attribute) {
		if(!$attribute) return $attribute;
		if(is_array($attribute)) {
			return '';
		}
		if(!strpos($attribute, '|') ) return $attribute;
		$attribute = str_replace('var:', '', $attribute);
		return 'var(--wp--' . str_replace('|', '--',$attribute) . '); ';
	}

	public static function color_is_light($hexvalue) {
		if(!preg_match('/#(?:[0-9a-fA-F]{6,8})/', $hexvalue)) {
			return false;
		}
		if(strlen($hexvalue) === 9) {
			$hexvalue = substr($hexvalue, 0, -2);
		}
		
		$color = str_replace('#', '', $hexvalue); 
		$red = hexdec(substr($color, 0, 2)); 
		$green = hexdec(substr($color, 2, 2)); 
		$blue = hexdec(substr($color, 4, 2)); 
		
		return intval((($red * 299) + ($green * 587) + ($blue * 114)) / 1000) > 170; 
	}



}