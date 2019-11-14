import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';

export default class ButtonEdit extends Component {
	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			title,
			url,
			size,
			outline,
		} = attributes

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<button type="button" class={"btn " + attributes.size + " btn" + (attributes.outline ? "-outline" : "") + attributes.style}>{attributes.title}</button>
			</Fragment>
		);
	};

}