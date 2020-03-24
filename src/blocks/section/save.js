import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			backgroundColor,
            backgroundImage,
            className,
            imagePosition,
			preserveColor,
			containerWidth
		} = attributes;

		var sectionClasses = [
			className || '',
            "uk-section",
            preserveColor ? "uk-preserve-color" : "",
            backgroundImage == "" ? ("uk-section-" + backgroundColor) : "uk-background-cover "
        ].join(" ")

        var style = {
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundPosition: imagePosition
        }
		

        return (
            <Fragment>
                <div style={style} className={sectionClasses}>
                    <div className={"uk-container " + containerWidth}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </Fragment>
        );


}


