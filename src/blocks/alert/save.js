import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';

export default function save( {attributes} ) {

		const {
			alertText,
			alertColor,
			className,
			isDismissable,
		} = attributes;

		var classes=[
			className,
			"uk-alert-" + alertColor
		].join(" ");

		return (
			<Fragment>
                <div className={classes} uk-alert="">
                    { isDismissable && <a type="button" class="uk-alert-close" uk-close=""></a> }
                    <p dangerouslySetInnerHTML={{ __html: alertText }}></p>
                </div>
			</Fragment>
		);
}


