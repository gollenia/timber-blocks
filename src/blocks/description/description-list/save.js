
/**
 * External dependencies
 */
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( props ) {
       
		const {
			dividers,
            className
        } = props.attributes;


        var classes = [
            className || false,
            dividers ? "uk-description-list-divider" : false,
        ].filter(Boolean).join(" ");
        
        const children = props.innerBlocks;
        
		return (
            <dl className={classes}>
                <InnerBlocks.Content />
            </dl>
		);
}


