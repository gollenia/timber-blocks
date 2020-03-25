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
            hasParallax,
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
             hasParallax > 0 ? "parallax: " + hasParallax : "",
             " "
        ].join(" ");
		

        return (
            <Fragment>
                
                    <div className={classes} uk-grid={ukGrid}>
                        <InnerBlocks.Content />
                    </div>
               
            </Fragment>
        );


}


