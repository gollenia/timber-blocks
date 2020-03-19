import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';


export default function save( {attributes} ) {

		const {
			tabsOnDesktop,
            oneAtATime,
            className
        } = attributes;


        var classes = [
            className,
            "btn",
        ].join(" ");
        

        
        
        
		return (
			<Fragment>
				<div id="accordion">
						<InnerBlocks.Content />
                </div>
			</Fragment>
		);
}


