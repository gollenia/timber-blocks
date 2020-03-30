import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, SelectControl, CheckboxControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

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
            setAttributes({image: {url:"" }});
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Aussehen"
                        initialOpen={false}
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
                    </PanelBody>
                    <PanelBody
                        title="Verhalten"
                        initialOpen={false}
                    >
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

                    <PanelColorSettings
                        title="Farbe"
                        initialOpen={false}
                        colorSettings={[
                            {
                                label: 'Hintergrundfarbe',
                                onChange: setBackgroundColor ,
                                value: backgroundColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                        
                    <PanelBody
                        title={__('Bild', 'ctxblocks')}
                        initialOpen={false}
                    >
                        <MediaUploadCheck>
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media}) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { image.url === "" && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image.url !== "" && <div>
                                            <Fragment>
                                            <img className="" src={image.sizes.small.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ removeImage }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
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