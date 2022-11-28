<?php
namespace Contexis\Utils;

class TwigExtend {

    public static function add_to_twig($twig) {
        $twig->addFunction( new \Twig\TwigFunction( 'get_color_by_slug', [__CLASS__,'get_color_by_slug'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_featured_image', [__CLASS__,'get_featured_image'] ) );
        return $twig;
    }

    public static function get_color_by_slug($slug, $hexvalue = '') {

		if(!$slug & !$hexvalue) return false;
        
		if($hexvalue) {
			
			if(!preg_match('/#(?:[0-9a-fA-F]{6,8})/', $hexvalue)) {
				
				return "ödkjfdjf";
			}

			if(strlen($hexvalue) === 9) {
				$hexvalue = substr($hexvalue, 0, -2);
			}
			$color = str_replace('#', '', $hexvalue); 
			$red = hexdec(substr($color, 0, 2)); 
			$green = hexdec(substr($color, 2, 2)); 
			$blue = hexdec(substr($color, 4, 2)); 
			
			return ['color' => $hexvalue, 'light' => !intval((($red * 299) + ($green * 587) + ($blue * 114)) / 1000) > 170]; 
			
		}

        $colors = get_theme_support('editor-color-palette');
        //var_dump($colors);
		$color = [];
		if(!$colors) return; 
        foreach ($colors[0] as $set) {
            //var_dump($set);
            if($set['slug'] === $slug) {
                $color = $set;
                break;
            }
        }

        return $color;
    }

	public static function get_featured_image($size = 'large') {
		$post = get_post( '' );
		$post_thumbnail_id = get_post_thumbnail_id( $post );	
		return wp_get_attachment_image_src( $post_thumbnail_id, $size );

	}

   
}