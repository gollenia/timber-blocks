import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class SectionEdit extends Component {

	
	render() {
		const {
			attributes,
			className,
		} = this.props;

		const {
			widthSmall,
			widthMedium,
            widthLarge
		} = attributes;

		// var style = {
		// 	background: backgroundColor.color, 
		// 	backgroundSize: "cover", 
		// 	backgroundPosition: imagePosition, 
		// 	backgroundImage: "url(" + backgroundImage + ")"
		// };

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div class={"ctx-col ctx-cols-" + widthLarge}>
                    <div class="ctx-col-header ctx-hide">
                        <label>Spalte</label>
                    </div>
					<InnerBlocks 		
					/>
				</div>    
			</Fragment>
		);
	};

}