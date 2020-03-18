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
				<div style={{background: color.lighten(0.5), color: color.darken(0.5)}} className={className + " ctx-blocks-alert"}>
					{dismissable &&
						<span type="button" className={"close"} data-dismiss="alert" aria-label="Close">
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
								value={ footer }
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