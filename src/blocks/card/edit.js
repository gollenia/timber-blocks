import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
import {RichText} from '@wordpress/editor';

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

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			style,
			text,
			footer,
			title,
			dismissable
		} = attributes;


		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div class={"ctx-blocks-alert alert-" + style}>
				<span type="button" class={"close" + (dismissable ? " show" : " hidden")} data-dismiss="alert" aria-label="Close">
    				<span aria-hidden="true">×</span>
  				</span>
				<RichText
					tagName="h2"
					label={__("Title", 'ctxblocks')}
					value={ attributes.title }
					onChange={ (title) => setAttributes({ title }) }
					placeholder={__("Insert Title (optional)", 'ctxblocks')}
				/>
				<RichText
					tagName="p"
					label={__("Text", 'ctxblocks')}
					value={ attributes.text }
					onChange={ (text) => setAttributes({ text }) }
					placeholder={__("Message goes here...", 'ctxblocks')}
				/>
				<hr/>
				<RichText
					tagName="p"
					label={__("Footer", 'ctxblocks')}
					value={ attributes.footer }
					onChange={ (footer) => setAttributes({ footer }) }
					placeholder={__("Insert Footer (optional)", 'ctxblocks')}
				/>
				</div>
			</Fragment>
		);
	};

}