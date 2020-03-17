/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, SelectControl, RadioControl } from '@wordpress/components';
import { PanelColorSettings, withColors, getColorClassName } from '@wordpress/editor';
/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            backgroundColor,
            borderColor,
            textColor,
            setTextColor,
            setBackgroundColor,
            setBorderColor,
        } = this.props;

		const {
            image,
            imagePosition,
            textAlign
		} = attributes;

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
                    </PanelBody>
                    <PanelBody
                        title={__('Farbeinstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelColorSettings
                            colorSettings={[
                                {
                                    label: 'Textfarbe',
                                    onChange: setTextColor ,
                                    value: textColor.color,
                                    disableCustomColors: true,
                                },
                                {
                                    label: 'Hintergrundfarbe',
                                    onChange: setBackgroundColor ,
                                    value: backgroundColor.color,
                                    disableCustomColors: true,
                                },
                                {
                                    label: 'Rahmenfarbe',
                                    onChange: setBorderColor,
                                    value: borderColor.color,
                                    disableCustomColors: true,
                                }
                            ]}
                        />
                        
                        
                        
                    </PanelBody>
                    <PanelBody
                        title={__('Bild', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media.url}) }
                                label="Hintergrundbild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div><img clss="components-responsive-wrapper__content" src={image} onClick={open} alt="Kein Bild geladen"/><button type="button" class="components-button is-button is-default is-large" onClick={ open }>Bild auswählen</button></div> ;
                                 } }
                            />
                        </MediaUploadCheck>
                        <RadioControl
                            label="Bildposition"
                            selected={ imagePosition }
                            options={ [
                                { label: 'Oben', value: 'top' },
                                { label: 'Unten', value: 'bottom' }
                            ] }
                            onChange={ ( position ) => { setAttributes( { imagePosition: position } ) } }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;