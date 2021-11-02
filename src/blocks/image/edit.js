import Inspector from './inspector';
import CustomToolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { BlockControls, useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { IconButton, Toolbar, ToolbarItem, Button } from '@wordpress/components'

export default function Edit({...props}) {

		const {
			setAttributes,
			attributes: {
				image,
				alignment,
				width,
				roundCorners,
				round,
				border,
				shadow,
				flip,
				caption
			},
			className,
		} = props;

	
		var imageClasses = [
			className,
			flip ? "ctx-flip-image" : false,
			border ? "ctx-border-image" : false,
			roundCorners ? "ctx-round-corners" : false,
			shadow ? "ctx-shadow-image" : false,
			round ? "ctx-round-image" : false
		].filter(Boolean).join(" ");

		var imageHolderClass = [
			"ctx-image-holder",
			alignment
		].filter(Boolean).join(" ");

		return (
			<>
				<CustomToolbar
						{ ...props }
				/>
				<Inspector
						{ ...props }
				/>
				<div {...useBlockProps()}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes({image: media}) }
						label={__("Image", "ctx-blocks")}
						value= { image }
						render={ ( { open } ) => {
							return <>
								{ !image && 
									<div className="components-placeholder block-editor-media-placeholder is-medium">
										<div class="components-placeholder__label"><span class="block-editor-block-icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"></path><path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"></path></svg></span>Bild</div>
										<div class="components-placeholder__instructions">
										{__("Select image from library", 'ctx-blocks')}
										</div>
										<button type="button" className="components-button is-primary" onClick={ open }>{__("Media library", 'ctx-blocks')}</button>
									</div>
								}
								{ image && 
									<>
										<BlockControls>
										<Toolbar>
											<ToolbarItem onClick={ open } as={ Button }>{__("Replace", "ctx-blocks")}</ToolbarItem>
										</Toolbar>
										</BlockControls>
										<div className={imageHolderClass}>
											{ round && image.sizes.medium &&
												<img width={`${width}%`} className={imageClasses}  src={image.sizes.medium.url} alt={__("No image loaded", 'ctx-blocks')}/> 
											}
											{ round && !image.sizes.medium &&
												<p>{__("The image is too small to be rendered. Please upload a larger image", 'ctx-blocks')}</p> 
											}
											{ !round && <img width={`${width}%`} className={imageClasses} src={image.url} alt={__("No image loaded", 'ctx-blocks')} /> }
											<RichText	
												tagName="div"
												value={ caption }
												className="caption"
												onChange={ (value) => setAttributes({ caption: value }) }
												placeholder={__("Image caption", "ctx-blocks")}
											/>
										</div> 
									</>
								}
							</> ;
							} }
					/>
				</MediaUploadCheck>
				</div>
				
			</>
		);

}