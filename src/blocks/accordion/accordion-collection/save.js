/**
 * Wordpress dependencies
 */
import { InnerBlocks} from '@wordpress/block-editor';

/**
 * External dependencies
 */
import map from 'lodash/map';


export default function save( props ) {
       
		const {
			tabsOnDesktop,
            multiOpen,
            noCollapse,
            className
        } = props.attributes;
        
        var accordionOptions = [
            multiOpen ? "multiple: true" : false,
            noCollapse ? "collapsible: false" : false,
        ].filter(Boolean).join("; ");
        
        const children = props.innerBlocks;

        
		return (
			<div className={className}>
                { tabsOnDesktop &&

                        <div className="uk-visible@m">
                            <ul uk-tab="">
                                { map( children, ( { attributes } ) => (<li><a href="#">{attributes.title}</a></li>) ) }
                            </ul>
                            <ul className="uk-switcher uk-margin">
                                <InnerBlocks.Content />
                            </ul>
                        </div>
                        

                }
                { !tabsOnDesktop &&

                        <ul uk-accordion={accordionOptions}>
                            <InnerBlocks.Content />
                        </ul>

                }
                
				
			</div>
		);
}


