import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			textColor,
			borderColor,
			backgroundColor,
			textAlign,
			className,
			imagePosition,
			image,
		} = attributes;

		var classes = [
			className || '',
			"card",
			"bg-" + backgroundColor,
			"text-" + textColor,
			"border-" + borderColor,
			textAlign
		].join(" ")
		
		return (
			<Fragment>
                <div className={classes}>
					{imagePosition == "top" &&
						<img class="card-img-top" src={image} alt="Card image cap"/>
					}
					<div class="card-body">
						<InnerBlocks.Content />
					</div>
					{imagePosition == "bottom" &&
						<img class="card-img-bottom" src={image} alt="Card image cap"/>
					}
				</div>
			</Fragment>
		);
}


