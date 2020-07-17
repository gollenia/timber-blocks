<?php
namespace Contexis\Blocks;

class Block {

    private $attributes = [];

    public function __construct(array $attributes = [])
    {
        //get next metadata.json
        //fill $attributes
        //replace given attributes
    }

    public function render() {
        return null;
    }

    public static function registerDynamicBlocks($args) {
        
        $files = scandir(dirname( plugin_dir_path( __FILE__ ) ) . '/classes/Blocks');

        if (!$files) { return; }
        
		foreach($files as $file) {

			if ("php" === pathinfo($file, PATHINFO_EXTENSION)) {


                require_once(dirname( plugin_dir_path( __FILE__ ) ) . '/classes/Blocks/' . $file);
                
                $block = 'Contexis\\Blocks\\Dynamic\\' . substr($file, 0, -4);


                //add_action( 'init', function() use(&$block, &$args){
                    new $block($args);
                //});
                
			}
		}
    }


    public static function registerSimpleBlocks($blocks, $args) {
        add_action('init', function() use (&$blocks, &$args) {
            foreach ($blocks as $value) {
                register_block_type(
                    $value, $args
                );
            }
        });
    }

}