import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, PanelRow, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
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
            transparent,
            imageRound,
            imageWidth,
            imageBorder,
            url,
            textAlign
        } = attributes;

        var isSVG = ( image != null ? image.subtype == "svg+xml" : false );
		return (
			<Fragment>
				<InspectorControls>

                    <PanelBody
                        title="Verhalten"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label="Hover-Effekt"
                            checked={hover}
                            onChange={(value) => {setAttributes( { hover: value })}}
                        />
                        <ToggleControl
                            label="Transparenz-Effekt"
                            helt="Der Hintergrund scheint verschwommen durch"
                            checked={transparent}
                            onChange={(value) => {setAttributes( { transparent: value })}}
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
                                        { !image && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image && 
                                            <div>
                                                { !isSVG &&
                                                    <img className="" src={image.sizes.small.url} onClick={open} alt="Kein Bild geladen"/>
                                                }
                                                { isSVG &&
                                                    <img className="" src={image.url} onClick={open} alt="Kein Bild geladen"/>
                                                }
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({ image: null }) }> Beitragsbild entfernen</button>
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
                                        { label: 'Rechts', value: 'right' },
                                        { label: 'Links', value: 'left' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { imagePosition: event } ) } }
                                />
                            </div>
                            <PanelRow>
                                <ToggleControl
                                    label="Bild rund anzeigen"
                                    checked={imageRound}
                                    onChange={(value) => {setAttributes( { imageRound: value })}}
                                />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                    label="Bild mit Rand darstellen"
                                    checked={imageBorder}
                                    onChange={(value) => {setAttributes( { imageBorder: value })}}
                                    disable={!imageRound }
                                />
                                </PanelRow>
                            <PanelRow>
                            <RangeControl
                                label={__("Bildgröße in %", 'ctx-blocks')}
                                max={ 100 }
                                min={ 10 }
                                onChange={(value) => {setAttributes( { imageWidth: value })}}
                                value={ imageWidth }
                            />
                            </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;