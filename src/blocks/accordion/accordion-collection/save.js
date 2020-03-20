import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';


export default function save( {attributes} ) {

		const {
			tabsOnDesktop,
            multiOpen,
            noCollapse,
            className
        } = attributes;


        var classes = [
            className,
            "btn",
        ].join(" ");
        
        
        var options = [
            multiOpen ? "multiple: true" : "",
            noCollapse ? "collapsible: false" : "",
        ].join("; ");
        
        
		return (
			<Fragment>
				<ul uk-accordion={options}>
						<InnerBlocks.Content />
                </ul>
			</Fragment>
		);
}


