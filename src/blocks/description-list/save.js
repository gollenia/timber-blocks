/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Save({ ...props }) {
	const {
		attributes: { dividers },
		className,
	} = props;

	const classes = [
		'ctx:description__wrapper',
		className,
		dividers ? 'ctx-description--divider' : false,
	]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({ className: classes });
	const innerBlockProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlockProps}></div>;
}
