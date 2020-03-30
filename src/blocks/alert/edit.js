import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';

var Color = require('color');

export default class ButtonEdit extends Component {
	render() {
		
		const {
			attributes,
			setAttributes,
			className,
			alertColor
		} = this.props;

		const {
			alertText,
			isDismissable
		} = attributes;

		var color = Color(alertColor.color);

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={{background: color.lighten(0.5), color: color.darken(0.5)}} className={className + " ctx-blocks-alert"}>
					{isDismissable &&
						<span type="button" className={"close"} data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">×</span>
						</span>
					}
					
					<RichText
						tagName="p"
						label={__("Text", 'ctxblocks')}
						value={ alertText }
						onChange={ (alertText) => setAttributes({ alertText }) }
						placeholder={__("Nachricht hier einfügen", 'ctxblocks')}
						keepPlaceholderOnFocus={true}
					/>
					
				</div>
			</Fragment>
		);
	};

}