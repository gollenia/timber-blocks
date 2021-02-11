/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BaseControl, ToggleControl, TextControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
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
            title,
			url,
            size,
            isLink,
			outline,
        } = attributes;
        
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Caption", 'ctx-blocks')}
                            value={ title }
                            placeholder={__("Text on button", 'ctx-blocks')}
                            onChange={ (value) => setAttributes({ title: value }) }
                        />
                        <BaseControl
                            label="URL oder Link angeben"
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
			</Fragment>
		);
	}
}

export default Inspector;