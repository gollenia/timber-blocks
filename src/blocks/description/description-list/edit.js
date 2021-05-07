/**
 * External dependencies
 */


/**
 * Internal dependencies
 */
import Inspector from './inspector';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit({...props}) {

        const {
            attributes: {
				dividers
			},
			className,
		} = props;

        var classes = [
            className,
            dividers ? "ctx-divider" : false
		].filter(Boolean).join(" ")

        const TEMPLATE = [
			[
				'ctx-blocks/description-item'
			]
		];

		const blockProps = useBlockProps( { className: classes } );

		return (
			<div {...blockProps}>
				<Inspector
						{ ...props }
				/>
				<div>
					<InnerBlocks 
						allowedBlocks={['ctx-blocks/description-item']}
						template={TEMPLATE}
					/>	
				</div>
			</div>
		);

}

