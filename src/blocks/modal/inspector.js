/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BaseControl, ToggleControl, SelectControl, TextControl, PanelBody, PanelRow, Button, ButtonGroup } from '@wordpress/components';
import map from 'lodash/map';
/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
            buttonColor,
            setButtonColor
		} = this.props;

		const {
            buttonTitle,
            buttonSize,
            buttonIsLink,
            modalFull,
            modalContainer,
            modalTitle,
            modalCloseButton,
            modalCenter,
            modalScroll,
            modalHasVideo,
            modalVideoUrl
        } = attributes;
        
        

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Button-Einstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Beschriftung", 'ctxblocks')}
                            value={ buttonTitle }
                            placeholder="Text auf dem Button"
                            onChange={ (value) => setAttributes({ buttonTitle: value }) }
                        />
                        
                        
                        <PanelRow>
                        <SelectControl
                                    label='Größe'
                                    value={ buttonSize }
                                    options={ [
                                        { label: 'Normal', value: '' },
                                        { label: 'Klein', value: 'small' },
                                        { label: 'Groß', value: 'large' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { buttonSize: event } ) } }
                                />
                        </PanelRow>
                        
                        <PanelRow>
                            <ToggleControl
                                label={ __("Als Link anzeigen", 'ctxblocks')}
                                checked={ buttonIsLink }
                                onChange={ (value) => setAttributes({ buttonIsLink: value }) 
                                }
                            />
                        </PanelRow>
                        
                    </PanelBody>
                    <PanelColorSettings
                            title="Button-Farbe"
                            colorSettings={[
                                {
                                    label: 'Legen Sie eine Farbe für den Button fest',
                                    onChange: setButtonColor ,
                                    value: buttonColor.color,
                                    disableCustomColors: true,
                                },
                            ]}
                    />
                    <PanelBody
                        title={__('Modal-Einstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                       
                        <PanelRow>
                            <SelectControl
                                    label='"Schliessen"-Knopf'
                                    value={ modalCloseButton }
                                    options={ [
                                        { label: 'Normal', value: 'uk-modal-close-default' },
                                        { label: 'Ohne', value: 'uk-hidden' },
                                        { label: 'Außerhalb', value: 'uk-modal-close-outside' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { modalCloseButton: event } ) } }
                                />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Auf Container begrenzen", 'ctxblocks')}
                                checked={ modalContainer }
                                onChange={ (value) => setAttributes({ modalContainer: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Horizonzal zentriert anzeigen", 'ctxblocks')}
                                checked={ modalCenter }
                                onChange={ (value) => setAttributes({ modalCenter: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Volle Bildschirmgröße", 'ctxblocks')}
                                checked={ modalFull }
                                onChange={ (value) => setAttributes({ modalFull: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Scroll-Leiste anzeigen", 'ctxblocks')}
                                checked={ modalScroll }
                                onChange={ (value) => setAttributes({ modalScroll: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Video einbetten", 'ctxblocks')}
                                checked={ modalHasVideo }
                                onChange={ (value) => setAttributes({ modalHasVideo: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__("Video-Url", 'ctxblocks')}
                                disabled={!modalHasVideo}
                                value={ modalVideoUrl }
                                placeholder="Text auf dem Button"
                                onChange={ (value) => setAttributes({ modalVideoUrl: value }) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;