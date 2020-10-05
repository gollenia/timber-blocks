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
			imagePosition,
			parallaxEffect,
			paddingTop,
			paddingBottom,
			backgroundIsDark,
			textAlignment,
			backgroundImage
		} = attributes;

		var style = {
			background: backgroundColor.color,
			backgroundSize: "cover", 
			backgroundPosition: imagePosition, 
			backgroundImage: backgroundImage ? "url(" + backgroundImage.sizes.large.url + ")" : "none",
			color: backgroundIsDark ? "#ffffff" : "#000000",
			paddingTop: `${paddingTop}0px`,
			paddingBottom: `${paddingBottom}0px`
		};



		var classes = [
			"ctx-section",
			"alignfull",
			parallaxEffect ? "parallax" : false,
			className || false,
			`ctx-text-align-${textAlignment}`,
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
					<div className="ctx-container">
						<InnerBlocks 
							
						/>
					</div>
				</div>
				
			</Fragment>
		);
	};

}