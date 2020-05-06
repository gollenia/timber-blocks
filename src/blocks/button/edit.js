/**
 * Wordpress dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import contrast  from '../../common/utils/contrast';

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
			className || false,
			"uk-button",
			size || false,
			outline ? "btn-outline" : false
		].filter(Boolean).join(" ");



		

		var style = {
            background: isLink ? "none" : ( outline ? "none" : buttonColor.color ),
            border: isLink ? "1px solid transparent" : "1px solid " + buttonColor.color,
            color: isLink ? buttonColor.color : (outline ? buttonColor.color : contrast(buttonColor.color))
		}
		
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