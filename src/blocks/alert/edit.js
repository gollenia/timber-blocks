/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';

/**
 * External dependencies
 */
var Color = require('color');

export default class ButtonEdit extends Component {

	render() {
		
		const {
			attributes,
			setAttributes,
			className,
			title,
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
				<div style={{background: color.lighten(0.5), color: color.darken(0.5)}} className={`${className} ctx-blocks-alert`}>
					{isDismissable &&
						<span type="button" className={"ctx-close"}>
							<span>×</span>
						</span>
					}

					<RichText
						tagName="h3"
						label={__("Überschrift", 'ctx-blocks')}
						value={ title }
						onChange={ (value) => setAttributes({ title: value }) }
						placeholder={__("Überschrift", 'ctx-blocks')}
						keepPlaceholderOnFocus={true}
					/>
					
					<RichText
						tagName="p"
						value={ alertText }
						onChange={ (value) => setAttributes({ alertText: value }) }
						placeholder={__("Nachricht hier einfügen", 'ctx-blocks')}
						keepPlaceholderOnFocus={true}
					/>
					
				</div>
			</Fragment>
		);
	};

}