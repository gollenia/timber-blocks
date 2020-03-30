import Inspector from './inspector';
import Toolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';

export default class ButtonEdit extends Component {
	render() {
		const {
			attributes,
			buttonColor,
			className,
		} = this.props;

		const {
			title,
			size,
			isLink,
			outline,
			buttonAlignment
		} = attributes

		var classes = [
			className,
			"uk-button",
			size || "",
			outline ? "btn-outline" : ""
		].join(" ");

		var style = {
            background: isLink ? "none" : ( outline ? "none" : buttonColor.color ),
            border: isLink ? "1px solid transparent" : "1px solid " + buttonColor.color,
            color: isLink ? "#007bff" : (outline ? buttonColor.color : '#ffffff')
		}
		
		console.log(buttonAlignment);

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<Toolbar
						{ ...this.props }
				/>
				<div style={{textAlign: buttonAlignment}}>
					<a style={style} type="button" className={classes}>
						{title === "" && <Fragment>Beschriftung hinzufügen</Fragment>}
						{title !== "" && <Fragment>{title}</Fragment>}
					</a>
				</div>
			</Fragment>
		);
	};

}