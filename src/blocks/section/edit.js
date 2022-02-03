import Inspector from './inspector';
import Toolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

export default function Edit({...props}) {

	const innerBlocksProps = useInnerBlocksProps({ className: 'ctx-container' });

	const {
		attributes: {
			imagePosition,
			parallaxEffect,
			paddingTop,
			paddingBottom,
			textAlignment,
			backgroundImage
		},
		className,
		backgroundColor
	} = props;


	const textColor = backgroundColor.color ? props.colorUtils.getMostReadableColor(backgroundColor.color) : "#000000";

	
	const style = {
		background: backgroundColor.color,
		backgroundSize: "cover", 
		backgroundPosition: imagePosition, 
		backgroundImage: backgroundImage ? "url(" + backgroundImage.sizes.large.url + ")" : "none",
		color: textColor,
		paddingTop: `${paddingTop}0px`,
		paddingBottom: `${paddingBottom}0px`
	};		

	const classes = [
		"ctx-section",
		"alignfull",
		parallaxEffect ? "parallax" : false,
		className || false,
		`ctx-text-align-${textAlignment}`,
	].filter(Boolean).join(" ");

	const blockProps = useBlockProps({className: classes, style: style});

	return (
		<>
			<Inspector
				{ ...props }
			/>
			<Toolbar 
				{ ...props }
			/>

			<div {...blockProps}>
				<div className="ctx-container" {...innerBlocksProps}>
					
				</div>
			</div>
			
		</>
	);

}