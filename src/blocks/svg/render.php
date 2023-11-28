<?php
$path = get_attached_file( $attributes['id'] );
if(!file_exists($path)) {
	error_log("SVG File $path not found", 0);
	return "";
}

$tag = $attributes['linkUrl'] ? 'a' : 'div';
$style = "width: {$attributes['width']}px; height: {$attributes['height']}px;";

?>

<?php if($attributes['linkUrl']) : ?>
<a href="<?php echo $attributes['linkUrl'] ?>" target="<?php echo $attributes['linkNewTab'] ? '_blank' : '' ?>" style="<?php echo $style; ?>">
<?php else : ?>
<div class="svg-wrapper" style="<?php echo $style; ?>">
<?php endif; ?>
	<style>
		.svg-wrapper svg path {
			fill: <?php echo $attributes['fillColor'] ?>;
			stroke: <?php echo $attributes['strokeColor'] ?>;
		}
	</style>
	<?php echo file_get_contents($path); ?>
<?php echo $attributes['linkUrl'] ? "</a>" : "</div>";
