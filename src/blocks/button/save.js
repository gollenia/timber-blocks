import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';


export default function save( {attributes} ) {
		
		const {
			title,
			buttonColor,
			size,
			className,
            outline,
            isLink,
			url
        } = attributes;

        var classes = "uk-button uk-button-link";
        if(!isLink) {
            classes = [
                className,
                "uk-button",
                size || '',
                outline ? "uk-btutton-outline-" + buttonColor : "uk-button-" + buttonColor,
            ].join(" ");
        }

        
        
        
		return (
			<Fragment>
				<a className={classes} href={url}>{ title }</a>
			</Fragment>
		);
}

