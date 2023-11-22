/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { dividers } = attributes;

	const classes = [
		'ctx:description__wrapper',
		dividers ? 'ctx-description--divider' : false,
	]
		.filter(Boolean)
		.join(' ');

	const style = {
		gap:
			attributes.style?.spacing?.blockGap
				.replaceAll('|', '--')
				.replace(':', '(--wp--') + ')' ?? undefined,
	};
	const blockProps = useBlockProps.save({ className: classes, style: style });
	const innerBlockProps = useInnerBlocksProps.save(blockProps);

	return <ul {...innerBlockProps}></ul>;
}
