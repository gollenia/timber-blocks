import Inspector from './inspector';
import CustomToolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { BlockControls, useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Toolbar, ToolbarItem, Button, Icon } from '@wordpress/components'
import icon from './icon';

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

	
		const imageClasses = [
			className,
			flip ? "ctx:image--flip" : false,
			border ? "ctx:image--border" : false,
			roundCorners && !round ? "ctx:image--rounded" : false,
			shadow ? "ctx:image--shadow" : false,
			round ? "ctx:image--circle" : false,
		].filter(Boolean).join(" ");

		const Image = () => {
			if(!image) return <></>;
			if(image.subtype == 'svg+xml') return <figure><img width={`${width}%`} src={image.url} /></figure>
			if(!image.sizes) return <img className={imageClasses} src={image.url} />
			if(image.sizes.large) return <picture><img className={imageClasses} width={`${width}%`} src={image.sizes.large.url} /></picture>
			if(image.sizes.medium) return <picture><div className="ctx:image__warning"><label><Icon icon="warning"/><span>{__("The image may be too small", "ctx-blocks")}</span></label></div><img className={imageClasses} width={`${width}%`} src={image.sizes.medium.url} /></picture>
			if(image.sizes.thumbnail) return <picture><div className="ctx:image__warning ctx:image__warning--fatal"><label><Icon icon="warning"/><span>{__("The image is too small", "ctx-blocks")}</span></label></div><img className={imageClasses} width={`${width}%`} src={image.sizes.thumbnail.url} /></picture>
		}

		return (
			<>
				<CustomToolbar
						{ ...props }
				/>
				<Inspector
						{ ...props }
				/>
				<div {...useBlockProps({className: 'ctx:image ctx:image--' + alignment})}>
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
										
											<Image />
											<RichText	
												tagName="div"
												value={ caption }
												className="ctx:image__caption"
												onChange={ (value) => setAttributes({ caption: value }) }
												placeholder={__("Image caption", "ctx-blocks")}
											/>
										
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