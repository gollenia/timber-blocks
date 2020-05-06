import { Fragment } from '@wordpress/element';

import ImageRenderer from './image';


const save = ( { attributes } ) => {

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
            marginShift
		} = attributes;

		var overlayClasses = [
			"uk-overlay",
			overlayStyle,
			"uk-position-" + overlayPosition,
			"uk-transition-" + overlayAnimation,
			"ctx-shadow"
		].join(" ");
		

		var inlineClass = overlayAnimation === "" ? "uk-inline" : "uk-inline-clip uk-transition-toggle";
		
		var wrapperClasses = [
			className || false,
			"ctx-image",
			marginShift || false
		].filter(Boolean).join(" ");


		return (
			<div className={wrapperClasses}>
				{ hasOverlay && 
					<Fragment>
						{ hasLightbox &&
							<div className={inlineClass} uk-lightbox="">
								<a href={image.url} data-alt={image.alt} data-caption={lightboxText}>
								{ ImageRenderer(attributes) }
								{ overlayCover && <div class={`${overlayClasses} uk-overlay-default uk-position-cover`}></div> }
								<div className={overlayClasses}><p dangerouslySetInnerHTML={{ __html: overlayText }}></p></div>
								</a>
							</div>	
						}
						{ !hasLightbox &&
							<div className={inlineClass}>
								{ ImageRenderer(attributes) }
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
							{ ImageRenderer(attributes) }
							</a>
						</div>	
					}
					{ !hasLightbox &&
						<div>
						{ ImageRenderer(attributes) }
						</div>	
					}
					</Fragment>
				}
			</div>
		);

}


export default save;