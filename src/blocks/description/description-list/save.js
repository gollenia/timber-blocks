
/**
 * External dependencies
 */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';
import map from 'lodash/map';


export default function save( props ) {
       
		const {
			dividers,
            className
        } = props.attributes;


        var classes = classnames(
            className,
            { "uk-description-list-divider": dividers },
        )
        
        const children = props.innerBlocks;
        
		return (
			<Fragment>
                <dl className={classes}>
                    <InnerBlocks.Content />
                </dl>
			</Fragment>
		);
}


