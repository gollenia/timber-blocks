<?php

namespace Contexis\Utils;

class ImageSizes {

    public static function register() {
        add_action( 'after_setup_theme', function() {
            add_image_size( 'xsmall', 350 );  // 1/4 columns
            add_image_size( 'small', 500 );		// 1/3 columns
            add_image_size( 'medium', 720 );	// 1/2 column
            add_image_size( 'large', 1300 );	// 1/1 column
            add_image_size( 'hullhd', 1920 );	// full hd
            add_image_size( 'wqhd', 2560 );	//wqhd
            //add_image_size( 'fourk', 4000 );	//4k
            add_image_size( 'qsmall', 150, 150, true );
            add_image_size( 'qmedium',300, 300, true );
            add_image_size( 'qlarge', 500, 500, true );
            add_image_size( 'qxlarge', 800, 800, true );
        });

        add_filter( 'image_size_names_choose', function ($sizes) {
            return array_merge( $sizes, array(
                'xsmall' => __( 'Winzig' ),
                'small' => __( 'Klein' ),
                'medium' => __( 'Mittel' ),
                'large' => __( 'Groß' ),
                'fullhd' => __( 'Full HD (1080p)' ),
                'wqhd' => __( 'WQHD (1440p)' ),
                'qsmall' => __( 'Klein Quadratisch' ),
                'qmedium' => __( 'Mittel Quadratisch' ),
                'qlarge' => __( 'Groß Quadratisch' ),
                'qxlarge' => __( 'Riesig Quadratisch' ),
            ) );
        });
    }

}
