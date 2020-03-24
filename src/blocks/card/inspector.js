/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, Button, SelectControl, RadioControl, CheckboxControl } from '@wordpress/components';
import { PanelColorSettings, withColors, getColorClassName } from '@wordpress/block-editor';
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
            image,
            imagePosition,
            hover,
            url,
            textAlign
        } = attributes;
        
        function removeImage () {
            setAttributes({image: ""});
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Optionen"
                        initialOpen={true}
                    >
                        <SelectControl
                            label="Textausrichtung"
                            value={ textAlign }
                            options={ [
                                { label: 'Links', value: '' },
                                { label: 'Mitte', value: 'text-center' },
                                { label: 'Rechts', value: 'text-right' },
                            ] }
                            onChange={ ( align ) => { setAttributes( { textAlign: align } ) } }
                        />
                        <CheckboxControl
                            label="Hover-Effekt"
                            value={hover}
                            onChange={(event) => {setAttributes( { hover: event })}}
                        />
                        <BaseControl
                            label="URL oder Link angeben"
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Hier klicken' } ) }
                            />
                        </BaseControl>
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
                        title={__('Bild', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media.url}) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { image === "" && <button type="button" class="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image !== "" && <div>
                                            <Fragment>
                                            <img className="" src={image} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" class="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" class="components-button is-link is-destructive" onClick={ removeImage }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            <div className="ctx-placement">
                                <SelectControl
                                    label="Bildplatzierung"
                                    value={ imagePosition }
                                    options={ [
                                        { label: 'Oben', value: 'top' },
                                        { label: 'Unten', value: 'bottom' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { imagePosition: event } ) } }
                                />
                        </div>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;