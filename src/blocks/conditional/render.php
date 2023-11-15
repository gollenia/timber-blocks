<?php

require_once plugin_dir_path( __FILE__ ) . 'helpers.php';

$attributes['content'] = $content;

$from = strtotime($attributes['fromDate'] ?? "1970-01-01");
$to = strtotime($attributes['toDate'] ?? "2100-01-01");
$now = time();

$is_within = $now >= $from && $now <= $to;
$hide = $attributes['hideWithinDateRange'] ? $is_within : ! $is_within;

if($hide) return;

if($attributes['usersOnly'] && !is_user_logged_in()) echo $this->get_login_info($attributes);

if(!$attributes['showLoginNotice']) return;

$result = "<div class='login-info'>";
$result .= $attributes['loginNotice'] ? "<p class=\"login-notice\">" . $attributes['loginNotice'] . "</p>" : "";
$result .= $attributes['includeLoginForm'] ? wp_login_form( [
	'echo' => false,
] ) : "";
$result .= $attributes['includeRegisterLink'] ? "<p class=\"register-link\">" . wp_register( '', '', false ) . "</p>" : "";
$result .= "</div>";

echo $result;