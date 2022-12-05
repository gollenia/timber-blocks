<?php
namespace Contexis\Utils;

class StyleHelper {

	public static function spacing(array $object, string $type) {
		$result = '';

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
}