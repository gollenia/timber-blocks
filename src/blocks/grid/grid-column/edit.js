import Inspector from './inspector';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function GridColumnEdit( { ...props } ) {
	const {
		attributes: { widthLarge },
		className,
	} = props;

	const TEMPLATE = [ [ 'core/paragraph', {} ] ];

	const size = widthLarge == 0 ? 'Auto' : widthLarge;

	const blockProps = useBlockProps( {
		className: className + ` ctx:column ctx:column--${ widthLarge }`,
	} );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
	} );

	return (
		<>
			<Inspector { ...props } />
			<div { ...blockProps }>
				<div className="ctx:column__label ctx:control__label">
					<label>
						{ __( 'Column (width: ', 'ctx-blocks' ) + size + ')' }
					</label>
				</div>
				<div { ...innerBlocksProps }></div>
			</div>
		</>
	);
}
