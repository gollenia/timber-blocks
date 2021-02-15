/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, SelectControl, CheckboxControl, RangeControl } from '@wordpress/components';
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
            overlayColor,
            setOverlayColor,
        } = this.props;

		const {
            hasLightbox,
            lightboxText,
            round,
            border,
            width,
            shadow,
            hasOverlay,
            overlayStyle,
            overlayIsDark,
            roundCorners,
            overlayPosition,
            overlayCover,
            overlayAnimation,
            overlayIcon,
            marginShift,
        } = attributes;

        function setColor(newColor) {
            
            setOverlayColor(newColor) 
            var color = new Color(newColor);
            attributes.overlayIsDark = false;
            if(color.isDark()) {
                attributes.overlayIsDark = true;
            }
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Design', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <RangeControl
                            label="Breite"
                            value={ width }
                            onChange={ ( value ) => setAttributes( { width: value } ) }
                            min={ 0 }
                            max={ 100 }
                        />
                        
                        <CheckboxControl
                                label={__('Circular Image', 'ctx-blocks')}
                                checked={round}
                                onChange={(event) => {setAttributes( { round: event })}}
                        />
                        <CheckboxControl
                                label={__('Round corners', 'ctx-blocks')}
                                checked={roundCorners}
                                onChange={(event) => {setAttributes( { roundCorners: event })}}
                        />
                        <CheckboxControl
                            label={__('Border', 'ctx-blocks')}
                            checked={border}
                            onChange={(event) => {setAttributes( { border: event })}}
                        />
                        <CheckboxControl
                            label={__('Shadow', 'ctx-blocks')}
                            checked={shadow}
                            onChange={(event) => {setAttributes( { shadow: event })}}
                        />
                    </PanelBody>
                    <PanelColorSettings
                        colorSettings={[
                            {
                                title:"Overlay-Farbe",
                                label: 'Farbe, wenn ein Overlay eingestellt ist',
                                onChange: setColor ,
                                value: overlayColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                    <PanelBody
                        title={__('Overlay', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Bild hat ein Overlay"
                            checked={hasOverlay}
                            onChange={(event) => {setAttributes( { hasOverlay: event })}}
                        />
                        <CheckboxControl
                            label="Über das ganze Bild"
                            disabled={!hasOverlay}
                            checked={overlayCover}
                            onChange={(event) => {setAttributes( { overlayCover: event })}}
                        />
                        <SelectControl
                            label="Position"
                            disabled={!hasOverlay}
                            value={ overlayPosition }
                            options={ [
                                { label: 'Unten', value: 'bottom' },
                                { label: 'Mitte', value: 'center' },
                                { label: 'Oben', value: 'top' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayPosition: event } ) } }
                        />
                        <SelectControl
                            label="Farbe"
                            disabled={!hasOverlay}
                            value={ overlayStyle }
                            help="Die Farbe kann, abhängig vom gewählten Theme, abweichen."
                            options={ [
                                { label: 'Kein besonderer Stil', value: '' },
                                { label: 'Hell', value: 'uk-overlay-default' },
                                { label: 'Dunkel', value: 'uk-overlay-primary' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayStyle: event } ) } }
                        />
                        <SelectControl
                            label="Animation"
                            disabled={!hasOverlay}
                            value={ overlayAnimation }
                            options={ [
                                { label: 'Keine', value: '' },
                                { label: 'Einblenden', value: 'fade' },
                                { label: 'Vergrößern', value: 'scale-up' },
                                { label: 'Verkleinern', value: 'scale-down' },
                                { label: 'Von unten', value: 'slide-bottom' },
                                { label: 'Von oben', value: 'slide-top' },
                                { label: 'Von rechts', value: 'slide-right' },
                                { label: 'Von links', value: 'slide-left' },
                                
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayAnimation: event } ) } }
                        />

                    </PanelBody>

                    <PanelBody
                        title={__('Interaktion', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Lightbox"
                            help="Beim Klicken vergrößern"
                            value={hasLightbox}
                            onChange={(event) => {setAttributes( { hasLightbox: event })}}
                        />
                        <TextControl
                            label="Beschriftung"
                            value={lightboxText}
                            onChange={(event) =>{ setAttributes( {lightboxText: event })}}
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;