import { __ } from '@wordpress/i18n'; 

export default function save( {attributes} ) {

		const {
			alertText,
			alertColor,
			className,
			title,
			isDismissable,
		} = attributes;

		var classes = [
			className || false,
			"uk-alert-" + alertColor
		].filter(Boolean).join(" ");

		return (
			<div className={classes} uk-alert="">
				{ isDismissable && <a type="button" class="uk-alert-close" uk-close=""></a> }
				{ title !== "" && <h3>{title}</h3>}
				<p dangerouslySetInnerHTML={{ __html: alertText }}></p>
			</div>
		);
}


