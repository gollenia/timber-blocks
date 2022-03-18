/**
 * Internal dependencies
 */
import Inspector from './inspector';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit({...props}) {

	const allowedBlocks = ['ctx-blocks/description-item'] 

        const {
            attributes: {
				dividers
			},
			className
		} = props;
		

        const classes = [
			'ctx:description__wrapper',
            className,
            dividers ? "ctx-description--divider" : false
		].filter(Boolean).join(" ")

        const template = [['ctx-blocks/description-item']];

		const blockProps = useBlockProps( { className: classes } );

		const innerBlockProps = useInnerBlocksProps({}, { allowedBlocks, template, templateLock: false })

		return (
			<div {...blockProps}>
				<Inspector
						{ ...props }
				/>
				<div className='ctx:description'>
					<div className='ctx:control'><span className='ctx:control__label ctx:description__label'>{__('Description List', 'ctx-blocks')}</span></div>
					<div {...innerBlockProps}></div>
				</div>
			</div>
		);

}

