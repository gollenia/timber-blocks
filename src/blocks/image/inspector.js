/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, TextControl, PanelBody, Button, SelectControl, RadioControl, CheckboxControl } from '@wordpress/components';
import { PanelColorSettings, withColors, getColorClassName } from '@wordpress/block-editor';
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
            overlayIcon,
            marginShift,
            isRound
        } = attributes;
        
        function removeImage () {
            setAttributes({image: ""});
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Bildeinstellungen"
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Dimensionen selbst festlegen"
                            help="Das Bild wird dann entsprechend zugeschnitten"
                            value={isCover}
                            onChange={(event) => {setAttributes( { isCover: event })}}
                        />
                        <TextControl
                            label="Breite"
                            value={ width }
                            disabled={!isCover}
                            onChange={ ( event ) => setAttributes( { width: event } ) }
                        />
                        <TextControl
                            label="Höhe"
                            value={ height }
                            disabled={!isCover}
                            onChange={ ( event ) => setAttributes( { height: event } ) }
                        />
                        
                        
                    </PanelBody>
                    <PanelBody
                        title={__('Design-Optionen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Rand"
                            help="Das Bild bekommt einen weißen Rand"
                            value={border}
                            onChange={(event) => {setAttributes( { border: event })}}
                        />
                        <CheckboxControl
                            label="Schatten"
                            help="Das Bild bekommt einen weißen Rand"
                            value={shadow}
                            onChange={(event) => {setAttributes( { shadow: event })}}
                        />
                        <CheckboxControl
                            label="Rund"
                            help="Das Bild wird rund dargestellt"
                            value={isRound}
                            onChange={(event) => {setAttributes( { isRound: event })}}
                        />
                        <RadioControl
                            label="Bildrand verschieben"
                            help="Assymetrisches Design"
                            selected={ marginShift }
                            options={ [
                                { label: 'Keine Verschiebung', value: '' },
                                { label: 'Verschiebung nach links', value: 'ctx-left-shift' },
                                { label: 'Verschiebung nach rechts', value: 'ctx-right-shift' },
                            ] }
                            onChange={ ( option ) => { marginShift( { option } ) } }
                        />
                        

                    </PanelBody>


                    <PanelBody
                        title={__('Interaktion', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Rund"
                            help="Das Bild wird rund dargestellt"
                            value={hasLightbox}
                            onChange={(event) => {setAttributes( { hasLightbox: event })}}
                        />
                        <BaseControl
                            label="URL oder Link angeben"
                        >
                            <URLInput
                                disabled={hasLightbox}
                                value={ linkUrl }
                                onChange={ ( linkUrl, post ) => setAttributes( { linkUrl, text: (post && post.title) || 'Click here' } ) }
                            />
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;