import Inspector from './inspector';
import Toolbar from './toolbar';
import { colord } from 'colord';
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

export default function Edit({...props}) {

	const template = [[ 'core/paragraph']];

	const innerBlocksProps = useInnerBlocksProps({ className: 'ctx-container' }, {template, renderAppender: false});

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


	const textColor = backgroundColor.color == undefined || colord(backgroundColor.color).isLight() ? "#000000" : "#ffffff";
	
	
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
		<div>
			<Inspector
				{ ...props }
			/>
			<Toolbar 
				{ ...props }
			/>

			<div {...blockProps}>
				<span className="ctx:control__label section__label">{__('Section', 'ctx-blocks')}</span>
				<div className="ctx-container" {...innerBlocksProps}>
					
				</div>
			</div>
			
		</div>
	);

}