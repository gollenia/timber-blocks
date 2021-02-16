import Inspector from './inspector';
import Toolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { Icon, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';

export default class ImageEdit extends Component {

	
	

	render() {
		const {
			setAttributes,
			attributes,
			clientId,
			className,
		} = this.props;

		const {
			image,
			alignment,
			width,
			roundCorners,
			round,
			border,
			shadow,
			flip
		} = attributes;	

	
		var imageClasses = [
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
			<Fragment>
				<Toolbar
						{ ...this.props }
				/>
				<Inspector
						{ ...this.props }
				/>
				
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes({image: media}) }
						label="Bild"
						value= { image }
						render={ ( { open } ) => {
							return <div className="editor-post-featured-image ctx-image-select">
								{ !image && 
									<Fragment>
										<div class="components-placeholder__label"><span class="block-editor-block-icon"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z"></path><path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z"></path></svg></span>Bild</div>
										<div class="components-placeholder__instructions">
										{__("Select image from library", 'ctx-blocks')}
										</div>
										<button type="button" className="components-button is-secondary" onClick={ open }>{__("Media library", 'ctx-blocks')}</button>
									</Fragment>
								}
								{ image && 
									<Fragment>
										<div className={imageHolderClass}>
											{ round && image.sizes.qmedium &&
												<img width={`${width}%`} className={imageClasses} src={image.sizes.qmedium.url} alt={__("No image loaded", 'ctx-blocks')}/> 
											}
											{ round && !image.sizes.qmedium &&
												<p>{__("The image is too small to be rendered. Please upload a larger image", 'ctx-blocks')}</p> 
											}
											{ !round && <img width={`${width}%`} className={imageClasses} src={image.url} alt={__("No image loaded", 'ctx-blocks')} /> }
										</div> 
										<button type="button" className="components-button is-secondary" onClick={ open }>{__("Replace image", 'ctx-blocks')}</button>
									</Fragment>
								}
							</div> ;
							} }
					/>
				</MediaUploadCheck>
				
				
			</Fragment>
		);
	};

}