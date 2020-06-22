import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';

export default class SectionEdit extends Component {

	
	render() {
		const {
			attributes,
		} = this.props;



		
		const {
            widthLarge
		} = attributes;

		const sizes = [
            "Auto",
            "1/4",
            "1/3",
            "1/2",
            "2/3",
            "3/4",
            "Ganz"
        ]

		return (
			<Fragment>
				
				<Inspector
						{ ...this.props }
				/>
				<div className={`ctx-col ctx-cols-${widthLarge}`}>
                    <div className="ctx-col-header ctx-hide">
                        <label>{`Spalte (Breite: ${sizes[widthLarge]})`}</label>
                    </div>
					<InnerBlocks 		
					/>
				</div>    
			</Fragment>
		);
	};

}