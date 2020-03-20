import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
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
			text,
			dismissable
		} = attributes;


		var color = Color(alertColor.color);

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={{background: color.lighten(0.5), color: color.darken(0.5)}} className={className + " ctx-blocks-alert"}>
					{dismissable &&
						<span type="button" className={"close"} data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">×</span>
						</span>
					}
					
					<RichText
						tagName="p"
						label={__("Text", 'ctxblocks')}
						value={ text }
						onChange={ (text) => setAttributes({ text }) }
						placeholder={__("Message goes here...", 'ctxblocks')}
					/>
					
				</div>
			</Fragment>
		);
	};

}