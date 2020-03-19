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
			"card",
            initialOpen,
            "bg-" + itemColor
        ].join(" ")
        
        var buttonClass = [
            "btn btn-link",
            initialOpen ? "" : "collapsed"
        ].join(" ");

        var contentClass = [
            "collapse",
            initialOpen ? "show" : ""
        ].join(" ");
        
        var uniqueId = Math.random().toString(36).substr(2, 9);

		return (
			<Fragment>
                <div className={classes}>
                    <div className="card-header" id={"heading" + uniqueId}>
                        <h5 className="mb-0">
                            <a className={buttonClass} data-toggle="collapse" data-target={"#collapse" + uniqueId} aria-expanded="true" aria-controls={"collapse" + uniqueId}>
                                {title}
                            </a>
                        </h5>
                    </div>
                    <div id={"collapse" + uniqueId} className={contentClass} aria-labelledby={"heading" + uniqueId} data-parent="#accordion">
                        <div className="card-body">
                            <InnerBlocks.Content />
                        </div>
                    </div>  
				</div>
			</Fragment>
		);
}


