/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, SelectControl, RadioControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/editor';
/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            backgroundColor,
            setBackgroundColor,
        } = this.props;

		const {
			backgroundImage,
            preserveColor,
            imagePosition,
			containerWidth
        } = attributes;
        
        function removeImage () {
            setAttributes({backgroundImage: ""});
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Optionen"
                        initialOpen={true}
                    >
                        <SelectControl
                            label="Containerbreite"
                            value={ containerWidth }
                            options={ [
                                { label: 'Normal', value: '' },
                                { label: 'Winzig', value: 'uk-container-xsmall' },
                                { label: 'Klein', value: 'uk-container-small' },
                                { label: 'Mittel', value: 'uk-container-large' },
                                { label: 'Groß', value: 'uk-container-xlarge' },
                                { label: 'Volle Breite', value: 'tuk-container-expand' },
                            ] }
                            onChange={ ( align ) => { setAttributes( { textAlign: align } ) } }
                        />
                        <CheckboxControl
                            label="Farben erhalten"
                            value={preserveColor}
                            onChange={(event) => {setAttributes( { preserveColor: event })}}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Farbeinstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelColorSettings
                            colorSettings={[
                                {
                                    label: 'Hintergrundfarbe',
                                    onChange: setBackgroundColor ,
                                    value: backgroundColor.color,
                                    disableCustomColors: true,
                                }
                            ]}
                        />
                        
                        
                        
                    </PanelBody>
                    <PanelBody
                        title={__('Hintergrundbild', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes({backgroundImage: media.url}) }
                                label="Hintergrundbild"
                                value= { backgroundImage }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { backgroundImage === "" && <button type="button" class="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { backgroundImage !== "" && <div>
                                            <Fragment>
                                            <img className="" src={backgroundImage} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" class="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" class="components-button is-link is-destructive" onClick={ removeImage }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                        </MediaUploadCheck>
                        <div class="ctx-image-position">
                            <RadioControl
                                label="Bildausrichtung festlegen"
                                help="Legen Sie die Position so fest, dass die entscheidenden Bildteile in den Rahmen rücken"
                                selected={ imagePosition }
                                options={ [
                                    { label: 'Links Oben', value: 'top left' },
                                    { label: 'Mitte Oben', value: 'top center' },
                                    { label: 'Rechts Oben', value: 'top right' },
                                    { label: 'Links Mitte', value: 'center left' },
                                    { label: 'Mitte Mitte', value: 'center' },
                                    { label: 'Rechts Mitte', value: 'center right' },
                                    { label: 'Links Unten', value: 'bottom left' },
                                    { label: 'Mitte Unten', value: 'bottom center' },
                                    { label: 'Rechts Unten', value: 'bottom right' }
                                ] }
                                onChange={ ( position ) => { setAttributes( { imagePosition: position } ) } }
                            />
                        </div>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;