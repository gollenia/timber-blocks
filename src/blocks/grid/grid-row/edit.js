import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
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

	const classes = [
		`ctx-row ctx-row-cols-gap-${gapSize}`,
		`ctx-row-cols-${childrenWidthLarge}`,
		flowColumns ? `ctx-flow-col` : false,
		equalizer ? `ctx-row-equalize` : false,
		divider ? `ctx-row-divider` : false,
	].filter(Boolean).join(" ");

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: classes,
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,	
			orientation: "horizontal"
		}
	)

	const blockProps = useBlockProps({className: 'ctx-row-container'});


	return (
		<>
			<Inspector
					{ ...props }
			/>
			<div {...blockProps}>
				<div className="ctx:control__label ctx:row__label">
					<label>{__('Row (columns: ', 'ctx-blocks') + childrenWidthLarge + ')'}</label>
					<div className="ctx:row__icons">
						{ equalizer && <Icon className="ctx:row__icon" icon={icons.equalizer} size={19}/> }
						{ divider && <Icon className="ctx:row__icon" icon={icons.divider}/> }
					</div>
				</div>
				
				<div {...innerBlocksProps} >
					
				</div>
			</div>
		</>
	);
	

}