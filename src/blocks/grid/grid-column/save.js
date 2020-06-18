import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
            widthSmall,
            widthLarge,
            widthMedium,
            className,
            expand,
            auto
		} = attributes;

		var classes = [
            className || false,
            widthSmall > 0 ? "uk-width-1-" + widthSmall + "@s" : false,
            widthMedium > 0 ? "uk-width-1-" + widthMedium + "@m" : false,
            widthLarge > 0 ? "uk-width-1-" + widthLarge + "@l" : false,
            expand ? "uk-width-expand" : false,
            auto ? "uk-width-auto" : false           
        ].filter(Boolean).join(" ");
		
        return (
            <div className={classes}>
                <InnerBlocks.Content />
            </div>
        );

}


