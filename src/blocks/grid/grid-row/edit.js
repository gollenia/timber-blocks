import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components'
import CustomAppender from './appender';
import icons from './icons.js'
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

export default function Edit({...props}) {

	const insertNewItem = (clientId) => {
		const newEvent = createBlock( 'ctx-blocks/grid-column' );
		const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
		const childBlocks = parentBlock.innerBlocks;
		dispatch( 'core/block-editor' ).insertBlock( newEvent, childBlocks.length, clientId );
	}

	const {
		clientId,
		attributes: {
			gapSize,
			equalizer,
			divider,
			flowColumns,
			childrenWidthLarge
		},
	} = props;


	const TEMPLATE = [
		[
			'ctx-blocks/grid-column' 
		],
		[
			'ctx-blocks/grid-column'
		]
	];

	var classes = [
		`ctx-row ctx-row-cols-gap-${gapSize}`,
		`ctx-row-cols-${childrenWidthLarge}`,
		flowColumns ? `ctx-flow-col` : false,
		equalizer ? `ctx-row-equalize` : false,
		divider ? `ctx-row-divider` : false,
	].filter(Boolean).join(" ");

	const blockProps = useBlockProps({className: classes});


	return (
		<>
			<Inspector
					{ ...props }
			/>
			<div {...blockProps}>
				<div className="ctx-row-header">
					<label>{__('Row (columns: ', 'ctx-blocks') + childrenWidthLarge + ')'}</label>
					<div className="ctx-row-icons">
						{ equalizer && <Icon className="ctx-row-icon" icon={icons.equalizer}/> }
						{ divider && <Icon className="ctx-row-icon" icon={icons.divider}/> }
					</div>
				</div>
				<div>
				</div>
				<div className={classes}>
					<InnerBlocks 	
						allowedBlocks={['ctx-blocks/grid-column']}
						template={TEMPLATE}	
						orientation="horizontal"
					/>
				</div>
			</div>
		</>
	);
	

}