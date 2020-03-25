import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
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
            className || '',
            widthSmall > 0 ? "uk-width-1-" + widthSmall + "@s" : "",
           widthMedium > 0 ? "uk-width-1-" + widthMedium + "@m" : "",
           widthLarge > 0 ? "uk-width-1-" + widthLarge + "@l" : "",
           expand ? "uk-width-expand" : "",
           auto ? "uk-width-auto" : ""           
       ].join(" ")
		

        return (
            <Fragment>
                    <div class={classes}>
                        <InnerBlocks.Content />
                    </div>
               
            </Fragment>
        );


}


