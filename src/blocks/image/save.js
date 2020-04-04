import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
//import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			hasLightbox,
			lightboxText,
            image,
            hasOverlay,
            overlayText,
            overlayStyle,
			overlayPosition,
			className,
			overlayCover,
			overlayAnimation,
			overlayIcon,
            marginShift
		} = attributes;

		var srcset = [
			image.sizes.xsmall !== undefined ? image.sizes.xsmall.url + " 350w" : "",
			image.sizes.small !== undefined ? image.sizes.small.url + " 500w" : "",
			image.sizes.medium !== undefined ? image.sizes.medium.url + " 720w" : "",
			image.sizes.large !== undefined ? image.sizes.large.url + " 1300w" : "",
			image.sizes.fullhd !== undefined ? image.sizes.fullhd.url + " 1920w" : "",
			image.sizes.wqhd !== undefined ? image.sizes.wqhd.url + " 2560w" : ""
		].join(", ")

		var overlayClasses = [
			"uk-overlay",
			overlayStyle,
			"uk-position-" + overlayPosition,
			"uk-transition-" + overlayAnimation,
			"ctx-shadow"
		].join(" ");

		var inlineClass = overlayAnimation === "" ? "uk-inline" : "uk-inline-clip uk-transition-toggle";
		
		var classes = [
			className,
			"ctx-image",
			marginShift
		].filter(item => item !== "").join(" ");

		var imageRender = <img 
			data-src={image.url}
			sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
			data-srcset={srcset}
			width={image.width} 
			height={image.height} 
			uk-img=""
		/>

		return (
			<div className={classes}>
				{ hasOverlay && 
					<Fragment>
					{ hasLightbox &&
						<div className={inlineClass} uk-lightbox="">
							<a href={image.url} data-alt={image.alt} data-caption={lightboxText}>
							{imageRender}
							{ overlayCover && <div class={`${overlayClasses} uk-overlay-default uk-position-cover`}></div> }
							<div className={overlayClasses}><p dangerouslySetInnerHTML={{ __html: overlayText }}></p></div>
							</a>
						</div>	
					}
					{ !hasLightbox &&
						<div className={inlineClass}>
							{imageRender}
							{ overlayCover && <div class={`${overlayClasses} uk-overlay-default uk-position-cover`}></div> }
							<div className={overlayClasses}><p dangerouslySetInnerHTML={{ __html: overlayText }}></p></div>
						</div>	
					}
					</Fragment>
				}
				{ !hasOverlay && 	
					<Fragment>
					{ hasLightbox &&
						<div uk-lightbox="">
							<a href={image.url} data-alt={image.alt} data-caption={lightboxText}>
							{imageRender}
							</a>
						</div>	
					}
					{ !hasLightbox &&
						<div>
							{imageRender}
						</div>	
					}
					</Fragment>
				}
			</div>
		);

}


