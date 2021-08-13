<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;
use Timber\Timber;

class Nav extends Block {

    public $blocks = [
        "nav"
    ];

    public function render($attributes, $content, $full_data) : string {
        $get_data = "get_" . $attributes['dataType'];
        $attributes['data'] = $this->{$get_data}($attributes);
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }



}
