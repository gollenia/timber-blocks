import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function GridColumnEdit({ ...props }) {
	const {
		attributes: { widthLarge, widthMedium, widthSmall, mobilePosition },
		className,
	} = props;

	const classes = [
		className,
		'grid__column',
		`grid__column--span-${widthSmall}`,
		`md:grid__column--span-${widthMedium}`,
		`xl:grid__column--span-${widthLarge}`,
		`grid__column--start-${mobilePosition}`,
	];

	const blockProps = useBlockProps.save({
		className:
			className +
			` grid__column grid__column--span-${widthSmall} md:grid__column--span-${widthMedium} xl:grid__column--span-${widthLarge}`,
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps, {});

	return (
		<>
			<div {...innerBlocksProps}></div>
		</>
	);
}
