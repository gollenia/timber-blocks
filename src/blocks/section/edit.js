import Inspector from './inspector';
import Toolbar from './toolbar';

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
			textAlignment,
			backgroundImage
		} = attributes;

		var style = {
			background: backgroundColor.color, 
			backgroundSize: "cover", 
			backgroundPosition: imagePosition, 
			backgroundImage: backgroundImage ? "url(" + backgroundImage.sizes.large.url + ")" : "none"
		};

		var classes = [
			"ctx-section",
			"alignfull",
			className || false,
			`ctx-text-align-${textAlignment}`,
			preserveColor ? "ctx-preserve-color" : false
		].filter(Boolean).join(" ");

		return (
			<Fragment>
				<Inspector
					{ ...this.props }
				/>
				<Toolbar 
					{ ...this.props }
				/>

				<div style={style} className={classes}>
					<div className={"ctx-container " + containerWidth}>
						<InnerBlocks 
							
						/>
					</div>
				</div>
				
			</Fragment>
		);
	};

}