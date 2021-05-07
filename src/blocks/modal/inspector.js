/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, TextControl, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes: {
                buttonTitle,
                buttonSize,
                buttonIsLink,
                modalFull,
                modalContainer,
                modalCloseButton,
                modalCenter,
                modalScroll,
                modalHasVideo,
                modalVideoUrl
            },
            setAttributes,
            buttonColor,
            setButtonColor
		} = this.props;       

		return (
			
				<InspectorControls>
                    <PanelBody
                        title={__('Button settings', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Description", 'ctx-blocks')}
                            value={ buttonTitle }
                            onChange={ (value) => setAttributes({ buttonTitle: value }) }
                        />
                        
                        
                        <PanelRow>
                        <SelectControl
                                    label='Size'
                                    value={ buttonSize }
                                    options={ [
                                        { label: __('Default', "ctx-blocks"), value: '' },
                                        { label: __('Small', "ctx-blocks"), value: 'small' },
                                        { label: __('Large', "ctx-blocks"), value: 'large' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { buttonSize: event } ) } }
                                />
                        </PanelRow>
                        
                        <PanelRow>
                            <ToggleControl
                                label={ __("Show as link", 'ctx-blocks')}
                                checked={ buttonIsLink }
                                onChange={ (value) => setAttributes({ buttonIsLink: value }) 
                                }
                            />
                        </PanelRow>
                        
                    </PanelBody>
                    <PanelColorSettings
                            title={ __("Button color", "ctx-blocks") }
                            colorSettings={[
                                {
                                    label: __("Select a color for the button", "ctx-blocks"),
                                    onChange: setButtonColor ,
                                    value: buttonColor.color,
                                    disableCustomColors: true,
                                },
                            ]}
                    />
                    <PanelBody
                        title={__('Window settings', 'ctx-blocks')}
                        initialOpen={true}
                    >
                       
                        <PanelRow>
                            <SelectControl
                                    label={ __('Close button', "ctx-blocks")}
                                    value={ modalCloseButton }
                                    options={ [
                                        { label: 'Default', value: '' },
                                        { label: 'No close button', value: 'hidden' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { modalCloseButton: event } ) } }
                                />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Limit to container size", 'ctx-blocks')}
                                checked={ modalContainer }
                                onChange={ (value) => setAttributes({ modalContainer: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Align centered", 'ctx-blocks')}
                                checked={ modalCenter }
                                onChange={ (value) => setAttributes({ modalCenter: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Full screen size", 'ctx-blocks')}
                                checked={ modalFull }
                                onChange={ (value) => setAttributes({ modalFull: value }) 
                                }
                            />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                label={ __("Show scroll bar", 'ctx-blocks')}
                                checked={ modalScroll }
                                onChange={ (value) => setAttributes({ modalScroll: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Embed video", 'ctx-blocks')}
                                checked={ modalHasVideo }
                                onChange={ (value) => setAttributes({ modalHasVideo: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__("Video URL", 'ctx-blocks')}
                                disabled={!modalHasVideo}
                                value={ modalVideoUrl }
                                placeholder=""
                                onChange={ (value) => setAttributes({ modalVideoUrl: value }) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			
		);
	}
}

export default Inspector;