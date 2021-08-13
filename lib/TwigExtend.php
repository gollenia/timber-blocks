<?php
namespace Contexis\Utils;

class TwigExtend {

    public static function add_to_twig($twig) {
        $twig->addFunction( new \Twig\TwigFunction( 'get_color_by_slug', [__CLASS__,'get_color_by_slug'] ) );
        return $twig;
    }

    public static function get_color_by_slug($slug) {
        $color = [];
        
        $colors = get_theme_support('editor-color-palette');
        //var_dump($colors);
        foreach ($colors[0] as $set) {
            //var_dump($set);
            if($set['slug'] === $slug) {
                $color = $set;
                break;
            }
        }

        

        return $color;
    }

   
}