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

        var classes = "btn btn-link";
        if(!isLink) {
            classes = [
                className,
                "btn",
                size || '',
                outline ? "btn-outline-" + buttonColor : "btn-" + buttonColor,
            ].join(" ");
        }

        
        
        
		return (
			<Fragment>
				<a className={classes} href={url}>{ title }</a>
			</Fragment>
		);
}


