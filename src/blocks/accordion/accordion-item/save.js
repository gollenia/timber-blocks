
/**
 * Wordpress dependencies
 */
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			itemColor,
			initialOpen,
            className,
            title
		} = attributes;

		var classes = [
			className || '',
            initialOpen ? "uk-open" : "",
            "bg-" + itemColor
        ].join(" ")
    
		return (<InnerBlocks.Content />);

		
}


