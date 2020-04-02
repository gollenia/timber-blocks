
/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';



export default function save( props ) {
       
		const {
            className,
            title,
            content,
            contentType
        } = props.attributes;


        var classes = classnames(
            className,
            "ctx-description-" + contentType
        )
        
        const children = props.innerBlocks;
        
        var readableDate = "";
        if(contentType==="date") {
            readableDate = moment(content).format( 'D. MMM YYYY' );
        }

		return (
			<Fragment>
                <div className={classes}>
                    <dt>                 
                        {title}   
                    </dt>
                    <dd>
                        { contentType === "date" && <time datetime={content}>{readableDate}</time>}
                        { contentType !== "date" && <time datetime={content}>{readableDate}</time>}
                    </dd>
                </div>
			</Fragment>
		);
}


