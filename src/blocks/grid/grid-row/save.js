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
		 	className || false,
            "uk-child-width-1-" + childrenWidthSmall + "@s",
            "uk-child-width-1-" + childrenWidthMedium + "@m",
            "uk-child-width-1-" + childrenWidthLarge + "@l",
            equalizer ? "uk-grid-match" : false,
            divider ? "uk-grid-divider" : false,
            "uk-grid-" + ["collapse", "small", "medium", "large"][gapSize]
            
        ].filter(Boolean).join(" ");

        var ukGrid = [
             isMasnory ? "masonry: true" : false,
             parallaxEffect > 0 ? "parallax: " + parallaxEffect : false,
        ].filter(Boolean).join(" ");

        if (ukGrid === "") { ukGrid = " "}
        
        var ukHeightMatch = equalizer ? "target: > div > .uk-card" : "";

        return (
            <div className={classes} uk-grid={ukGrid} uk-height-match={ukHeightMatch}>
                <InnerBlocks.Content />
            </div>
        );


}


