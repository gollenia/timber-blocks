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
        
        const sizes = [
            "",
            "uk-width-1-4",
            "uk-width-1-3",
            "uk-width-1-2",
            "uk-width-2-3",
            "uk-width-3-4",
            "uk-width-1-1"
        ]

		var classes = [
            className || false,
            widthSmall > 0 ? sizes[widthSmall] + "@s" : false,
            widthMedium > 0 ? sizes[widthMedium] + "@m" : false,
            widthLarge > 0 ? sizes[widthLarge] + "@l" : false,
            expand ? "uk-width-expand" : false,
            auto ? "uk-width-auto" : false           
        ].filter(Boolean).join(" ");
		
        return (
            <div className={classes}>
                <InnerBlocks.Content />
            </div>
        );

}


