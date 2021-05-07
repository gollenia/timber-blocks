import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components'
import icons from './icons.js'


const ALLOWED_BLOCKS = ['ctx-blocks/grid-column']

export default function GridRowEdit({...props}) {

	

	const {
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
				
				<div className={classes}>
					<InnerBlocks 	
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}	
						orientation="horizontal"
					/>
				</div>
			</div>
		</>
	);
	

}