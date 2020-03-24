import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class SectionEdit extends Component {

	
	render() {
		const {
			attributes,
			className,
			backgroundColor
		} = this.props;

		const {
			preserveColor,
			containerWidth,
			imagePosition,
			backgroundImage
		} = attributes;

		var style = {
			background: backgroundColor.color, 
			backgroundSize: "cover", 
			backgroundPosition: imagePosition, 
			backgroundImage: "url(" + backgroundImage + ")"
		};

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>

				<div style={style} className={"ctx-section alignfull " + className}>
					<div className={"ctx-container " + containerWidth}>
						<InnerBlocks 
							
						/>
					</div>
				</div>
				
			</Fragment>
		);
	};

}