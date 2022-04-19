import Toolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';


export default function Edit({...props}) {

	const {
        attributes: {
            textAlignment,
        }
    } = props;

	const ALLOWED_BLOCKS = [
		'ctx-blocks/button',
		'ctx-blocks/button-spacer',
		'events-manager/booking',
	]

	const classes = [
        "ctx:buttons",
        `ctx:buttons__${textAlignment}`
    ].filter(Boolean).join(" ");
	
	const innerBlocksProps = useInnerBlocksProps(
		{ className: classes },
		{
			template: [ [ 'ctx-blocks/button' ] ],
			allowedBlocks: ALLOWED_BLOCKS,
			orientation: 'horizontal'
		}
	);

    const blockProps = useBlockProps();

    return (
        <>
            <Toolbar 
                { ...props }
            />
			
            <div {...blockProps}>
				<label className='ctx:control__label'>{__("Button Group", "events")}</label>	
				<div {...innerBlocksProps }></div>
			
            </div>
            
        </>
    );

}