import relativeUrl from "../../common/utils/relurl"

import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

    const {
        backgroundColor,
        backgroundImage,
        className,
        imagePosition,
        parallaxEffect,
        textAlignment,
        preserveColor,
        containerWidth
    } = attributes;

    var sectionClasses = [
        className,
        "uk-section",
        `uk-text-${textAlignment}`,
        preserveColor ? "uk-preserve-color" : false,
        !backgroundImage ? ("uk-section-" + backgroundColor) : "uk-background-cover"
    ].filter(Boolean).join(" ")

    var style = {
        backgroundPosition: imagePosition
    }

    var srcset = false;
    if (backgroundImage) {
            srcset = [
            backgroundImage.sizes.xsmall !== undefined ? relativeUrl(backgroundImage.sizes.xsmall.url) + " 350w" : false,
            backgroundImage.sizes.small !== undefined ? relativeUrl(backgroundImage.sizes.small.url) + " 500w" : false,
            backgroundImage.sizes.medium !== undefined ? relativeUrl(backgroundImage.sizes.medium.url) + " 720w" : false,
            backgroundImage.sizes.large !== undefined ? relativeUrl(backgroundImage.sizes.large.url) + " 1300w" : false,
            backgroundImage.sizes.fullhd !== undefined ? relativeUrl(backgroundImage.sizes.fullhd.url) + " 1920w" : false,
            backgroundImage.sizes.wqhd !== undefined ? relativeUrl(backgroundImage.sizes.wqhd.url) + " 2560w" : false
        ].filter(Boolean).join(", ");
    }
    
    var parallax = parallaxEffect === 0 ? "" : "bgy: -" + parallaxEffect;

    return (
        <div data-srcset={srcset} data-src={backgroundImage ? relativeUrl(backgroundImage.url) : ""} style={style} className={sectionClasses} uk-img="" uk-parallax={parallax}>
            <div className={"uk-container " + containerWidth}>
                <InnerBlocks.Content />
            </div>
        </div>
    );


}


