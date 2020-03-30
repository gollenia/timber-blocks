import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
            className,
			gapSize,
            equalizer,
            divider,
            isMasnory,
            parallaxEffect,
            childrenWidthSmall,
            childrenWidthMedium,
            childrenWidthLarge
		} = attributes;

        
		var classes = [
		 	className || '',
            "uk-child-width-1-" + childrenWidthSmall + "@s",
            "uk-child-width-1-" + childrenWidthMedium + "@m",
            "uk-child-width-1-" + childrenWidthLarge + "@l",
            equalizer ? "uk-grid-match" : "",
            divider ? "uk-grid-divider" : "",
            "uk-grid-" + ["collapse", "small", "medium", "large"][gapSize]
            
        ].join(" ")

        var ukGrid = [
             isMasnory ? "masonry: true" : " ",
             parallaxEffect > 0 ? "parallax: " + parallaxEffect : "",
             " "
        ].join(" ");
        
        var ukHeightMatch = equalizer ? "target: > div > .uk-card" : "";

        return (
            <Fragment>
                
                    <div className={classes} uk-grid={ukGrid} uk-height-match={ukHeightMatch}>
                        <InnerBlocks.Content />
                    </div>
               
            </Fragment>
        );


}


