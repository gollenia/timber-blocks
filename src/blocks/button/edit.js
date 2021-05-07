/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { useBlockProps, RichText  } from '@wordpress/block-editor';


/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function Edit( {...props} ) {
	const {
		attributes: {
			title,
			size,
			isLink,
			outline,
			buttonAlignment,
		},
		setAttributes,
		buttonColor,
		className,
	} = props;

	var classes = [
			className || false,
			"ctx-button",
			size || false,
			outline ? "btn-outline" : false
	].filter(Boolean).join(" ");

	var textColor = props.colorUtils.getMostReadableColor(buttonColor.color);

	var style = {
          background: buttonColor.color,
          border: isLink ? "1px solid transparent" : "1px solid " + buttonColor.color,
          color: isLink ? buttonColor.color : (outline ? buttonColor.color : textColor),
		display: 'inline-block'
	}

	return (
		<Fragment>
			<Inspector
					{ ...props }
			/>
			<Toolbar
					{ ...props }
			/>
			<div { ...useBlockProps() } style={{textAlign: buttonAlignment}}>
			<span style={style} className={ classes }>
			<RichText
				tagName="span"
				value={ title }
				onChange={ (value) => setAttributes({ title: value }) }
				placeholder={ __( 'Button title', 'ctx-blocks' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
			</span>
			</div>
		</Fragment>
	);
}