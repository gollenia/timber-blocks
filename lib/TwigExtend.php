<?php
namespace Contexis\Utils;

class TwigExtend {

    public static function add_to_twig($twig) {
        $twig->addFunction( new \Twig\TwigFunction( 'get_color_by_slug', [__CLASS__,'get_color_by_slug'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_featured_image', [__CLASS__,'get_featured_image'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'render_blocks', [__CLASS__,'render_blocks'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'logo', [__CLASS__,'logo'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_style', [__CLASS__,'get_style'] ) );
		$twig->addFunction( new \Twig\TwigFunction( 'get_respsonsive_image', [__CLASS__,'get_respsonsive_image'] ) );
        return $twig;
    }

    public static function get_color_by_slug($slug, $hexvalue = '') {
		if(!$slug && !$hexvalue) return false;
        
		if($hexvalue) {
			return ['color' => $hexvalue, 'light' => Helper::color_is_light($hexvalue)]; 
		}

		if(in_array($slug, ['primary', 'secondary', 'error', 'warning', 'white', 'black']) ) return [
			"color" => "var(--$slug)",
			"contrast" => "var(--$slug-contrast)"
		];

		$settings = wp_get_global_settings();

		if(!isset($settings['color']['palette'])) return null;

        $colors = array_merge(
			$settings['color']['palette']['default'] ?? [], 
			$settings['color']['palette']['theme'] ?? [], 
			$settings['color']['palette']['custom'] ?? []
		);

		if(!$colors) return null; 

		$result = [];

        foreach ($colors as $set) {
            if($set['slug'] === $slug) {
                $result = $set;
				
                break;
            }
        }

		//$result['light'] = Helper::color_is_light($result['color']);

        return $result;
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
	

	public static function get_respsonsive_image( $image_id, $size = 'medium', $attrs = [] ) {
	
		// Check the image id
		if( ! $image_id = absint( $image_id ) )
			return false;
		
		// Check the attachment exists
		if( ! $image = wp_get_attachment_image_src( $image_id, $size ) ) {
			return false;
		}
		
		// Gather the required elements
		$img_src = wp_get_attachment_image_url( $image_id, $size );
		$img_srcset = wp_get_attachment_image_srcset( $image_id, $size );
		$img_sizes = wp_get_attachment_image_sizes( $image_id, $size );
		$image_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
		$image_alt = empty( $image_alt ) ? '' : ' alt="' . esc_attr( $image_alt ) .'"';
		
		$attributes = "";
		foreach($attrs as $key => $value) {
			$attributes .= ' ' . $key . '="' . $value . '"';
		}

		// Return the built output
		return '<img src="' . esc_url( $img_src ) . '"
			 srcset="' . esc_attr( $img_srcset ) . '"
			 sizes="' . esc_attr( $img_sizes ) . '"' . $image_alt . ' ' . $attributes . '>';
	}

   
}