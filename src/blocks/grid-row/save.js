import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const {
		equalizer,
		divider,
		childrenWidthLarge,
		childrenWidthMedium,
		childrenWidthSmall,
	} = attributes;

	const classes = [
		'grid__row',
		'grid',
		`grid--columns-${childrenWidthSmall}`,
		`md:grid--columns-${childrenWidthMedium}`,
		`xl:grid--columns-${childrenWidthLarge}`,
		equalizer && 'grid--equalizer',
		divider && 'grid--divider',
	]
		.filter(Boolean)
		.join(' ');

	const gapStyle = !attributes.style?.spacing?.blockGap
		? {}
		: {
				gap:
					attributes.style?.spacing?.blockGap
						.replaceAll('|', '--')
						.replace(':', '(--wp--') + ')',
		  };

	const blockProps = useBlockProps.save({
		className: classes,
		style: gapStyle,
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps, {});

	return <div {...innerBlocksProps}></div>;
}
