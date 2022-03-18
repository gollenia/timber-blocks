import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';


export default function GridColumnEdit ({...props}) {

		const {
			attributes: { widthLarge },
		} = props;

		const TEMPLATE = [ [ 'core/paragraph', {} ] ];

		const size = widthLarge == 0 ? "Auto" : widthLarge;

		const blockProps = useBlockProps({className: `ctx:column ctx:column--${widthLarge}`})

		const innerBlocksProps = useInnerBlocksProps({ className: 'ctx:column__wrapper' }, { template: TEMPLATE });


		return (
			<>
				<Inspector
						{ ...props }
				/>
				<div {...blockProps}>
                    <div className="ctx:column__label ctx:control__label">
                        <label>{__('Column (width: ', 'ctx-blocks') + size + ')'}</label>
                    </div>
					<div {...innerBlocksProps}></div>			
				</div>
				
			</>
		);
}