<?php if($attributes['image']['subtype'] == 'svg+xml'): ?>
  <figure class="figure" style="width: <?= $attributes['width'] ?>%; <?= $attributes['alignment'] == 'center' ? 'margin: auto' : '' ?>">
	<?= wp_get_original_image_path($attributes['image']['id']) ?>
  </figure>
<?php else: ?>
  <figure class="figure" style="width: <?= $attributes['width'] ?>%; <?= $attributes['alignment'] == 'center' ? 'margin: auto' : '' ?>">
	<img loading="lazy" style="<?= $attributes['flip'] ? 'transform: scaleX(-1);' : '' ?>" src="<?= wp_get_original_image_url($attributes['image']['id']) ?>" alt="<?= $attributes['image']['alt'] ?>" class="figure-img img-fluid <?= $attributes['border'] ? 'border' : '' ?> <?= $attributes['round'] ? 'rounded-circle' : '' ?> <?= $attributes['shadow'] ? 'shadow' : '' ?>">
	<?php if($attributes['caption']): ?>
	  <figcaption class="figure-caption"><?= $attributes['caption'] ?></figcaption>
	<?php endif; ?>
  </figure>
<?php endif; ?>