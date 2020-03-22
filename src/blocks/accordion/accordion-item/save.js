import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
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
    
		return (
			<Fragment>
                <li className={classes}>
                    <a class="uk-accordion-title" href="#">{title}</a>
                    <div class="uk-accordion-content">
                        <InnerBlocks.Content />
                    </div>
                </li>
			</Fragment>
		);
}

