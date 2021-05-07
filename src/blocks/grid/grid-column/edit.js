import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';


export default function Edit ({...props}) {

		const {
			attributes: { widthLarge },
		} = props;

		const size = widthLarge == 0 ? "Auto" : widthLarge;

		const blockProps = useBlockProps({className: `ctx-col ctx-cols-${widthLarge}`})

		return (
			<>
				
				<Inspector
						{ ...props }
				/>
				<div {...blockProps}>
                    <div className="ctx-col-header ctx-hide">
                        <label>{__('Column (width: ', 'ctx-blocks') + size + ')'}</label>
                    </div>
					<InnerBlocks 		
					/>
				</div>    
			</>
		);
}