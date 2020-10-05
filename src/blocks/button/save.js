export default function save( {attributes} ) {
		
		const {
			title,
			buttonColor,
			size,
			className,
            outline,
            isLink,
            buttonAlignment,
			url
        } = attributes;


        var classes = [
                className || false,
                "uk-button",
                size || false,
                outline ? "uk-button-outline-" + buttonColor : "uk-button-" + buttonColor,
                isLink ? "uk-button-link" : false
        ].filter(Boolean).join(" ");
        

		return (
			<div style={{textAlign: buttonAlignment}}>
				<a className={classes} href={url}>{ title }</a>
			</div>
		);
}