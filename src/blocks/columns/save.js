import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
            numbersOnSmall,
            numbersOnLarge,
            numbersOnMedium,
            className,
            dividers
		} = attributes;

		var classes = [
            className || false,
            numbersOnSmall > 0 ? "uk-column-1-" + numbersOnSmall + "@s" : false,
            numbersOnMedium > 0 ? "uk-column-1-" + numbersOnMedium + "@m" : false,
            numbersOnLarge > 0 ? "uk-column-1-" + numbersOnLarge + "@l" : false,
            dividers ? "uk-column-divider" : false,
        ].filter(Boolean).join(" ");
		
        return (
            <div className={classes}>
                <InnerBlocks.Content />
            </div>
        );

}


