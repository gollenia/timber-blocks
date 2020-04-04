import classnames from 'classnames';

import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { Icon, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { BlockControls, Button, SelectControl, Toolbar } from '@wordpress/components';

export default class ImageEdit extends Component {

	
	

	render() {
		const {
			setAttributes,
			attributes,
			clientId,
			className
		} = this.props;

		const {
            hasLightbox,
			image,
            hasOverlay,
            overlayText,
            overlayStyle,
			overlayPosition,
			overlayCover,
            overlayIcon,
            marginShift,
		} = attributes;	

		var classes = classnames(
			overlayStyle,
			"ctx-overlay-position-" + overlayPosition,
			{"ctx-overlay-cover": overlayCover}
		)

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>
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
											Wähle ein Bild aus der Mediathek
										</div>
										<button type="button" className="components-button is-secondary" onClick={ open }>Mediathek</button>
									</Fragment>
								}
								{ image && 
									<Fragment>
										<div className="ctx-image-holder">
											<img className="" src={image.url} alt="Kein Bild geladen"/>
											{hasOverlay && 
												<div className="ctx-overlay">
													<RichText
														tagName="div"
														label={__("Text", 'ctxblocks')}
														value={ overlayText }
														onChange={ (value) => setAttributes({ overlayText: value }) }
														placeholder={__("Text für Overlay", 'ctxblocks')}
														keepPlaceholderOnFocus={true}
													/>
												</div>
											}
										</div> 
										<button type="button" className="components-button is-secondary" onClick={ open }>Bild ersetzen</button>
									</Fragment>
								}
							</div> ;
							} }
					/>
				</MediaUploadCheck>
				</div>
				
			</Fragment>
		);
	};

}