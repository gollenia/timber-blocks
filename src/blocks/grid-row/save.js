import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save(props) {
	const {
		attributes: {
			equalizer,
			divider,
			childrenWidthLarge,
			childrenWidthMedium,
			childrenWidthSmall,
		},
		className,
	} = props;

	const classes = [
		'grid__row',
		'grid',
		`grid--columns-${childrenWidthSmall}`,
		`md:grid--columns-${childrenWidthMedium}`,
		`xl:grid--columns-${childrenWidthLarge}`,
		equalizer && 'grid--equalizer',
		divider && 'grid--divider',
		props.className,
	]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({ className: classes });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps, {});

	return <div {...innerBlocksProps}></div>;
}
