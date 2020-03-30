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
            parallaxEffect,
			preserveColor,
			containerWidth
		} = attributes;

		var sectionClasses = [
			className || '',
            "uk-section",
            preserveColor ? "uk-preserve-color" : "",
            backgroundImage.url == "" ? ("uk-section-" + backgroundColor) : "uk-background-cover"
        ].join(" ")

        var style = {
            backgroundPosition: imagePosition
        }

        var srcset = "";
		if (backgroundImage.url !== "") {
			 srcset = [
				backgroundImage.sizes.xsmall !== undefined ? backgroundImage.sizes.xsmall.url + " 350w" : "",
				backgroundImage.sizes.small !== undefined ? backgroundImage.sizes.small.url + " 500w" : "",
				backgroundImage.sizes.medium !== undefined ? backgroundImage.sizes.medium.url + " 720w" : "",
				backgroundImage.sizes.large !== undefined ? backgroundImage.sizes.large.url + " 1300w" : "",
				backgroundImage.sizes.fullhd !== undefined ? backgroundImage.sizes.fullhd.url + " 1920w" : "",
				backgroundImage.sizes.wqhd !== undefined ? backgroundImage.sizes.wqhd.url + " 2560w" : ""
			].join(", ");
		}
        
        var parallax = parallaxEffect === 0 ? "" : "bgy: -" + parallaxEffect;

        return (
            <Fragment>
                { backgroundImage.url !== "" && 
                    <div data-srcset={srcset} data-src={backgroundImage.url} style={style} className={sectionClasses} uk-img="" uk-parallax={parallax}>
                        <div className={"uk-container " + containerWidth}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                }
                { backgroundImage.url === "" && 
                    <div style={style} className={sectionClasses}>
                        <div className={"uk-container " + containerWidth}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                }
            </Fragment>
        );


}


