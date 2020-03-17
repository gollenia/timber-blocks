import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
import {RichText} from '@wordpress/block-editor';

var Color = require('color');

export default class ButtonEdit extends Component {

	renderCloseButton() {
		const {
			attributes,
		} = this.props;
		if(attributes.closeable) {
			return (
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    				<span aria-hidden="true">&times;</span>
  				</button>
			);
		}
	}


	lightenDarkenColor(col, amt) {
		var usePound = false;
		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}
	
		var num = parseInt(col,16);
		var r = (num >> 16) + amt;
	
		if (r > 255) r = 255;
		else if  (r < 0) r = 0;
		var b = ((num >> 8) & 0x00FF) + amt;
	
		if (b > 255) b = 255;
		else if  (b < 0) b = 0;
	
		var g = (num & 0x0000FF) + amt;
	
		if (g > 255) g = 255;
		else if (g < 0) g = 0;
	
		return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
	}

	render() {
		const {
			attributes,
			setAttributes,
			alertColor
		} = this.props;

		const {
			text,
			footer,
			showFooter,
			title,
			dismissable
		} = attributes;


		var color = Color(alertColor.color);

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={{background: color.lighten(0.5), color: color.darken(0.5)}} class="ctx-blocks-alert">
					{dismissable &&
						<span type="button" class={"close"} data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">×</span>
						</span>
					}
					
					<RichText
						tagName="h2"
						label={__("Title", 'ctxblocks')}
						value={ title }
						onChange={ (title) => setAttributes({ title }) }
						placeholder={__("Insert Title (optional)", 'ctxblocks')}
					/>
					<RichText
						tagName="p"
						label={__("Text", 'ctxblocks')}
						value={ text }
						onChange={ (text) => setAttributes({ text }) }
						placeholder={__("Message goes here...", 'ctxblocks')}
					/>
					{showFooter &&
						<Fragment>
							<hr/>
							<RichText
								tagName="p"
								label={__("Footer", 'ctxblocks')}
								value={ attributes.footer }
								onChange={ (footer) => setAttributes({ footer }) }
								placeholder={__("Insert Footer (optional)", 'ctxblocks')}
							/>
						</Fragment>
					}
					
				</div>
			</Fragment>
		);
	};

}