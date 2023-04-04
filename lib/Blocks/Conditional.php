<?php
namespace Contexis\Blocks;

use \Contexis\Blocks\Block;

use Timber\Timber;

class Conditional extends Block {

    public array $blocks = [
        "conditional"
    ];

	public static function init(\Contexis\Utils\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

    public function render($attributes, $content, $full_data) : string {
       
		$attributes['content'] = $content;

		if($attributes['usersOnly'] && !is_user_logged_in()) return $this->get_login_info($attributes);

		$from = strtotime($attributes['fromDate'] ?? "1970-01-01");
		$to = strtotime($attributes['toDate'] ?? "2100-01-01");
		$now = time();

		$is_within = $now >= $from && $now <= $to;
		$hide = $attributes['hideWithinDateRange'] ? $is_within : ! $is_within;
		
		if($hide) return "";
		
        $template = $this->get_template($full_data->name);
        return Timber::compile($template, $attributes);
        
    }

	public function get_condition($attributes) {
		$from = strtotime($attributes['fromDate']);
		$to = strtotime($attributes['toDate']);
		if(!$from && !$to) return true;
		if($from && !$to && $from > time()) return false;
		if($from && !$to && $from < time()) return true;
		if(!$from && $to && $to < time()) return false;
		if(!$from && $to && $to > time()) return true;
		if( $from > time() || $to < time() ) return false;
		return true;
	}

	public function get_login_info($attributes) {
		if(!$attributes['showLoginNotice']) return "";

		$result = "<div class='login-info'>";
		$result .= $attributes['loginNotice'] ? "<p class=\"login-notice\">" . $attributes['loginNotice'] . "</p>" : "";
		$result .= $attributes['includeLoginForm'] ? wp_login_form( [
			'echo' => false,
		] ) : "";
		$result .= $attributes['includeRegisterLink'] ? "<p class=\"register-link\">" . wp_register( '', '', false ) . "</p>" : "";
		$result .= "</div>";

		return $result;
	}
}
