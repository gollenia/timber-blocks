import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
import {RichText} from '@wordpress/editor';

export default class ButtonEdit extends Component {

	renderTitle() {
		const {
			attributes,
		} = this.props;
		if(attributes.title !== "") {
			return (
				<h4 class="alert-heading">{attributes.title}</h4>
			);
		}
	}

	renderFooter() {
		const {
			attributes,
		} = this.props;
		if(attributes.footer !== "") {
			return (
				<Fragment>
					<hr/>
					<p class="mb-0">{attributes.footer}</p>
				</Fragment>
			);
		}
	}

	renderCloseButton() {
		const {
			attributes,
		} = this.props;
		if(attributes.dismissable) {
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
                <div class={"alert alert-" + style} role="alert">
                    { this.renderCloseButton() }
                    { this.renderTitle() }
                    <p>{text}</p>
                    { this.renderFooter() }
                </div>
			</Fragment>
		);
	}

}
