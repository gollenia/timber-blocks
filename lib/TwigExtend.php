<?php
namespace Contexis\Utils;
use Contexis\Utils\StyleHelper;
class TwigExtend {

    public static function add_to_twig($twig) {
        $twig->addFunction( new \Twig\TwigFunction( 'get_color_by_slug', [__CLASS__,'get_color_by_slug'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_featured_image', [__CLASS__,'get_featured_image'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'render_blocks', [__CLASS__,'render_blocks'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'logo', [__CLASS__,'logo'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_style', [__CLASS__,'get_style'] ) );
        return $twig;
    }

    public static function get_color_by_slug($slug, $hexvalue = '') {
		if(!$slug && !$hexvalue) return false;
        
		if($hexvalue) {
			
			if(!preg_match('/#(?:[0-9a-fA-F]{6,8})/', $hexvalue)) {
				
				return "";
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
		if(in_array($slug, ['primary', 'secondary', 'error', 'warning', 'white', 'black']) ) return [
			"color" => "var(--$slug)",
			"contrast" => "var(--$slug-contrast)"
		];
        $colors = get_theme_support('editor-color-palette');

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

	/*
	* Render blocks from a block array
	* @param array $blocks
	* @return string
	*/
	public static function render_blocks($blocks) : string {
		$result = '';
		foreach($blocks as $block) {
			$result .= render_block($block);
		}
		return $result;
	}

	/*
	* Get the logo from the theme
	* @return string
	*/
	public static function logo() : string {

		$custom_logo_id = get_theme_mod( 'custom_logo' );

        if($custom_logo_id) {
                return get_attached_file($custom_logo_id);
        }

        $logo = get_stylesheet_directory() . '/' . 'logo.svg';
        if(file_exists($logo)) return $logo;


        $logo = get_template_directory() . '/' . 'logo.svg';
        if(file_exists($logo)) return $logo;

        return "";
    }
	
	/*
	* Get a specific style from a style array
	* @param array $style
	* @param string $property
	* @return string
	*/
	
	public static function get_style($style, $property): string {
		$result = '';
		
		return $result;
	}

   
}