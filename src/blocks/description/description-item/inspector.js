import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { DateTimePicker, TextControl, ToggleControl, SelectControl, PanelBody, PanelRow } from '@wordpress/components';

class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
		} = this.props;

		const {
            contentType,
            content,
            image,
            roundImage,
            icon
        } = attributes;

        const onUpdateDate = ( dateTime ) => {
			var newDateTime = moment(dateTime).format( 'YYYY-MM-DD HH:mm' );
			setAttributes( { content: newDateTime } );
        };

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Darstellung', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                        <SelectControl
                            label={ __( 'Art des Inhalts' ) }
                            value={ contentType } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => { setAttributes( { contentType: value, content: "", icon: value } ) } }
                            options={ [
                                { value: '', label: 'Normaler Text' },
                                { value: 'date', label: 'Datum' },
                                { value: 'time', label: 'Uhrzeit' },
                                { value: 'place', label: 'Ort' },
                                { value: 'person', label: 'Person'}
                            ] }
                        />
                        </PanelRow>
                        
                        { contentType === "date" &&
                        <div class="ctx-date-select">
                            <DateTimePicker
                                currentDate={ content }
                                onChange={ ( val ) => onUpdateDate( val ) }
                                is12Hour={ false }
                            />
                            </div>
                            }
               
                        
                    </PanelBody>
                    <PanelBody
                        title="Bild"
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media}) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !image && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image && <div>
                                            <Fragment>
                                            <img className="" src={image.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({image: null}) }> Bild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                } }
                            />
                        </MediaUploadCheck>
                        <PanelRow>
                            <ToggleControl
                                label="Rundes Bild"
                                help={ roundImage ? 'Bild ist rund.' : 'Bild ist Eckig.' }
                                checked={ roundImage }
                                onChange={ (value) => setAttributes( { roundImage: value } ) }
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label="Icon"
                                help="Hier die ID eines Icons eingeben. Da die Icons im Theme festgelegt werden, ist eine Vorschau im Editor nicht gewährleistet."
                                value={ icon }
                                onChange={ ( value ) => setAttributes( { icon: value } ) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;