/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( { ...props } ) {
	const { clientId } = props;
	const blockProps = useBlockProps();
	const allowedBlocks = [
		'core/post-title',
		'core/pararaph',
		'core/heading',
		'ctx-blocks/image',
		'ctx-blocks/grid-column',
		'ctx-blocks/button-group',
		'ctx-blocks/button',
	];

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		templateLock: false,
		renderAppender: false,
	} );

	return <div { ...innerBlocksProps } className="ctx:header-content"></div>;
}
