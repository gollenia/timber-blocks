import Inspector from './inspector';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function GridColumnEdit( { ...props } ) {
	const {
		attributes: { widthLarge },
		className,
	} = props;

	const TEMPLATE = [ [ 'core/paragraph', {} ] ];

	const blockProps = useBlockProps( {
		className: className + ` ctx:column ctx:column--${ widthLarge }`,
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
	} );

	return (
		<>
			<Inspector { ...props } />

			<div { ...innerBlocksProps }></div>
		</>
	);
}
