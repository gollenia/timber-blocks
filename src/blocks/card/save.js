import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
import {RichText, InnerBlocks} from '@wordpress/block-editor';
import { getColorClassName  } from '@wordpress/editor';

export default class CardSave extends Component {


	render() {
		const {
			attributes,
		} = this.props;

		const {
			textColor,
			borderColor,
			backgroundColor,
			textAlign,
			imagePosition,
			image,
		} = attributes;

		var classes = [
			"card",
			"bg-" + backgroundColor,
			"text-" + textColor,
			"border-" + borderColor
		]
		
		return (
			<Fragment>
                <div className={classes.join(" ")}>
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

}
