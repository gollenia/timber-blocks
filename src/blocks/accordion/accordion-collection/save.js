import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';
import map from 'lodash/map';


export default function save( props ) {
       
		const {
			tabsOnDesktop,
            multiOpen,
            noCollapse,
            className
        } = props.attributes;


        var classes = [
            className,
            tabsOnDesktop ? "btn" : "",
        ].join(" ");
        
        
        var options = [
            multiOpen ? "multiple: true" : "",
            noCollapse ? "collapsible: false" : "",
        ].join("; ");
        
        const children = props.innerBlocks;
        
		return (
			<Fragment>
                { tabsOnDesktop &&
                    <Fragment>
                        <div className="uk-visible@l">
                            <ul uk-tab="">
                            { map( children, ( { attributes } ) => (
                                <li><a href="#">{attributes.title}</a></li>
                            ) ) }
                            </ul>
                            <ul className="uk-switcher uk-margin">
                                <InnerBlocks.Content />
                            </ul>
                        </div>
                        <ul className="uk-hidden@l" uk-accordion={options}>
                            <InnerBlocks.Content />
                        </ul>
                    </Fragment>
                }
                { !tabsOnDesktop &&
                    <Fragment>
                        <ul uk-accordion={options}>
                            <InnerBlocks.Content />
                        </ul>
                    </Fragment>
                }
                
				
			</Fragment>
		);
}


