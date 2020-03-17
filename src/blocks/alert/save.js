import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { TextControl, PanelBody, withState } from '@wordpress/components';
import {RichText} from '@wordpress/editor';

export default class ButtonEdit extends Component {

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			style,
			text,
			alertColor,
			footer,
			title,
			dismissable,
			showFooter
		} = attributes;


		return (
			<Fragment>
                <div class={"alert alert-" + alertColor} role="alert">
                    {dismissable &&
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
					  	</button>
					}
                    {title !== "" &&
						<h4 class="alert-heading">{title}</h4>
					}
                    <p>{text}</p>
                    {showFooter &&
						<Fragment>
							<hr/>
							<p class="mb-0">{footer}</p>
						</Fragment>
					}
                </div>
			</Fragment>
		);
	}

}
