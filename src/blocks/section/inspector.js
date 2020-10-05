/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, RangeControl, PanelBody, SelectControl, RadioControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
var Color = require('color');
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
            imagePosition,
            paddingTop,
            paddingBottom,
            parallaxEffect,
        } = attributes;

        function setColor(newColor) {
            setBackgroundColor(newColor) 
            var color = new Color(newColor);
            setAttributes({backgroundIsDark: false});
            if(color.isDark()) {
                setAttributes({backgroundIsDark: true});
            }
        }

		return (
			<Fragment>
				<InspectorControls>            
                    <PanelColorSettings
                        colorSettings={[
                            {
                                title: __('Colors', 'ctx-blocks'),
                                label: __('Background Color', 'ctx-blocks'),
                                onChange: setColor ,
                                value: backgroundColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                        
                    <PanelBody
                        title={__('Background Image', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({backgroundImage: media}) }
                                label="Bild"
                                value= { backgroundImage }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !backgroundImage && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { backgroundImage && <div>
                                            <Fragment>
                                            <img className="" src={backgroundImage.sizes.small.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({backgroundImage: null}) }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
                        <div className="ctx-image-position">
                            <RadioControl
                                label={__("Image orientation", "ctx-blocks")}
                                help={__("Legen Sie die Position so fest, dass die entscheidenden Bildteile sichtbar sind")}
                                selected={ imagePosition }
                                disabled={!backgroundImage}
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
                        <CheckboxControl
                            label={__("Parallax-Effect", "ctx-blocks")}
                            disabled={!backgroundImage}
                            onChange={(event) => {setAttributes( { parallaxEffect: event })}}
                            checked={ parallaxEffect }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('padding', 'ctxblocks')}
                        initialOpen={false}
                    >
                        <RangeControl
                            label={__("Padding Top", "ctx_blocks")}
                            value={ paddingTop }
                            onChange={(event) => {setAttributes( { paddingTop: event })}}
                            min={ 0 }
                            max={ 11 }
                        />
                        <RangeControl
                            label={__("Padding Bottom", "ctx_blocks")}
                            value={ paddingBottom }
                            onChange={(event) => {setAttributes( { paddingBottom: event })}}
                            min={ 0 }
                            max={ 11 }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;