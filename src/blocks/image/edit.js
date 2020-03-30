import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';

export default class ImageEdit extends Component {

	
	

	render() {
		const {
			setAttributes,
			attributes,
			clientId,
			className
		} = this.props;

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
			altText,
            overlayIcon,
            marginShift,
            isRound
		} = attributes;

		function removeImage () {

			setAttributes({image: ""});
		}

		function setImage(media) {
			console.log(media);
			setAttributes({
				image: media
			});
		}

		// WAITING FOR WORDPRESS 5.4
		// function getColumnWidths () {
			
			
		// 	const columnBlock = wp.data.select( 'core/editor' ).getBlockInsertionPoint( clientId ).rootClientId;
		// 	const rowBlock = wp.data.select( 'core/editor' ).getBlockInsertionPoint( columnBlock ).rootClientId;
		// 	console.log("column: " + columnBlock);
		// 	console.log("row: " + rowBlock);
			
		// 	var columnAttributes = wp.data.select( 'core/editor' ).getBlockAttributes(columnBlock);
		// 	if (columnAttributes === null) {
		// 		return false;
		// 	}

		// 	var rowAttributes = wp.data.select( 'core/editor' ).getBlockAttributes(rowBlock);
		// 	if (rowAttributes === null) {
		// 		return false;
		// 	}

		// 	console.log(rowAttributes);
		// 	//console.log(columnAttributes);

		// 	var smallWidth = columnAttributes.widthSmall !== 0 ? columnAttributes.widthSmall : rowAttributes.childrenWidthSmall;
		// 	var mediumWidth = columnAttributes.widthMedium !== 0 ? columnAttributes.widthMedium : rowAttributes.childrenWidthMedium;
		// 	var largeWidth = columnAttributes.widthLarge !== 0 ? columnAttributes.widthLarge : rowAttributes.childrenWidthLarge;
			
		// 	return {
		// 		small: smallWidth,
		// 		medium: mediumWidth,
		// 		large: largeWidth
		// 	}
		// }

		


		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<MediaUpload
                                onSelect={ ( media ) => setImage(media) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { image === "" && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image !== "" && <div>
                                            <Fragment>
                                            <img className="" src={image.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ removeImage }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            
				
			</Fragment>
		);
	};

}