/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, Button, SelectControl, CheckboxControl } from '@wordpress/components';
/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
        } = this.props;

		const {
            hasLightbox,
            lightboxText,
            round,
            border,
            shadow,
            hasOverlay,
            overlayStyle,
            overlayPosition,
            overlayCover,
            overlayAnimation,
            overlayIcon,
            marginShift,
        } = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Design-Optionen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <SelectControl
                            label="Überhang"
                            help="Schiebt das Bild links oder rechts aus der Spalte"
                            selected={ marginShift }
                            options={ [
                                { label: 'Keine Verschiebung', value: '' },
                                { label: 'Verschiebung nach links', value: 'ctx-left-shift' },
                                { label: 'Verschiebung nach rechts', value: 'ctx-right-shift' },
                            ] }
                            onChange={ ( value ) => { setAttributes( { marginShift: value } ) } }
                        />
                        <CheckboxControl
                                label="Runde Form"
                                checked={round}
                                onChange={(event) => {setAttributes( { round: event })}}
                        />
                        <CheckboxControl
                            label="Rand"
                            checked={border}
                            onChange={(event) => {setAttributes( { border: event })}}
                        />
                        <CheckboxControl
                            label="Schatten"
                            checked={shadow}
                            onChange={(event) => {setAttributes( { shadow: event })}}
                        />
                    </PanelBody>
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