/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { URLInput, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BaseControl, ToggleControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes: {
                fullWidth,
                url,
                size,
                isLink,
                outline,
            },
            setAttributes,
            buttonColor,
            setButtonColor
		} = this.props;
      
        
		return (
			
				<InspectorControls>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        
                        <BaseControl
                            label={__("Add a URL or a link", 'ctx-blocks')}
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || __('Click here', 'ctx-blocks') } ) }
                            />
                        </BaseControl>
                        
                        <PanelRow>
                        <SelectControl
                                    label={__('Size', 'ctx-blocks')}
                                    value={ size }
                                    options={ [
                                        { label: __('Normal', 'ctx-blocks'), value: '' },
                                        { label: __('Small', 'ctx-blocks'), value: 'small' },
                                        { label: __('Large', 'ctx-blocks'), value: 'large' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { size: event } ) } }
                                />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Outline-Button", 'ctx-blocks')}
                                checked={ outline }
                                onChange={ (value) => setAttributes({ outline: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Link only", 'ctx-blocks')}
                                checked={ isLink }
                                onChange={ (value) => setAttributes({ isLink: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Full width", 'ctx-blocks')}
                                checked={ fullWidth }
                                onChange={ (value) => setAttributes({ fullWidth: value }) 
                                }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelColorSettings
                            title={__('Color Settings', 'ctx-blocks')}
                            colorSettings={[
                                {
                                    label: __('Set a background color for the button', 'ctx-blocks'),
                                    onChange: setButtonColor ,
                                    value: buttonColor.color,
                                    disableCustomColors: true,
                                },
                            ]}
                        />
                </InspectorControls>
			
		);
	}
}

export default Inspector;