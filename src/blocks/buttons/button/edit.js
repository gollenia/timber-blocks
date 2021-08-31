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

export default function ButtonEdit( {...props} ) {
	const {
		attributes: {
			title,
			size,
			isLink,
			outline,
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
    
	var textColor = buttonColor.brightness == "dark" ? "#ffffff" : "#000000";

    console.log(buttonColor)

	var style = {
          background: !outline && !isLink ? buttonColor.color : 'transparent',
          boxShadow: outline ? "inset 0px 0px 0px 2px " + buttonColor.color : 'none',
          color: isLink || outline ? buttonColor.color :  textColor,
		  display: 'inline-block'
	}

	return (
		<Fragment>
			<Inspector
					{ ...props }
			/>
			<span { ...useBlockProps() } style={style} className={ classes }>
			<RichText
				tagName="span"
				value={ title }
				onChange={ (value) => setAttributes({ title: value }) }
				placeholder={ __( 'Button title', 'ctx-blocks' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
			</span>
		</Fragment>
	);
}