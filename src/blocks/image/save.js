import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
//import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			width,
            height,
            isCover,
            hasLightbox,
            image,
            shadow,
            border,
            linkUrl,
            hasOverlay,
            overlayText,
            overlayStyle,
            overlayPosition,
            overlayIcon,
            marginShift,
            isRound
		} = attributes;

		// var classes = [
		// 	className || '',
		// 	"uk-card",
		// 	hover ? "uk-card-hover" : "",
		// 	"uk-card-" + backgroundColor,
		// 	textAlign
		// ].join(" ")
		

		var srcset = [
			image.sizes.xsmall !== undefined ? image.sizes.xsmall.url + " 350w" : "",
			image.sizes.small !== undefined ? image.sizes.small.url + " 500w" : "",
			image.sizes.medium !== undefined ? image.sizes.medium.url + " 720w" : "",
			image.sizes.large !== undefined ? image.sizes.large.url + " 1300w" : "",
			image.sizes.fullhd !== undefined ? image.sizes.fullhd.url + " 1920w" : "",
			image.sizes.wqhd !== undefined ? image.sizes.wqhd.url + " 2560w" : ""
		].join(", ")
		
		if(linkUrl==="") {
			return (
				<Fragment>
					<img 
						data-src={image.url}
						sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
						data-srcset={srcset}
						width={image.width} 
						height={image.height} 
						uk-img=""/>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<a href={linkUrl}>
				<img src={image} width={width} height={height} uk-img=""/>
				</a>
			</Fragment>
		);

}


