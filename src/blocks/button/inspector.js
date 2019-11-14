/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { URLInputButton } from '@wordpress/editor';
import { ToggleControl, TextControl, PanelBody, SelectControl, withState } from '@wordpress/components';
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
            title,
			url,
			size,
			outline,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Button settings', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Title", 'ctxblocks')}
                            value={ attributes.title }
                            onChange={ (title) => setAttributes({ title }) }
                        />
                        <URLInputButton
                            url={ attributes.url }
                            onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
                        />
                        <SelectControl
                            label={ __( 'Select style:', 'ctxblocks') }
                            value={ attributes.style } 
                            onChange={ (style) => setAttributes({ style }) } 
                            options={ [
                                { value: '-default', label: __('Normal', 'ctxblocks') },
                                { value: '-primary', label: __('Primary', 'ctxblocks') },
                                { value: '-secondary', label: __('Secondary', 'ctxblocks') },
                                { value: '-success', label: __('Success', 'ctxblocks') },
                                { value: '-info', label: __('Info', 'ctxblocks') },
                                { value: '-warning', label: __('Warning', 'ctxblocks') },
                                { value: '-danger', label: __('Danger', 'ctxblocks') },
                                { value: '-link', label: __('Link', 'ctxblocks') }
                            ] }
                        />
                        <SelectControl
                            label={ __( 'Size:', 'ctxblocks') }
                            value={ attributes.size }
                            onChange={ (size) => setAttributes({ size }) } 
                            options={ [
                                { value: '', label: __('Normal', 'ctxblocks') },
                                { value: 'btn-lg', label: __('Large', 'ctxblocks') },
                                { value: 'btn-sm', label: __('Small', 'ctxblocks') },
                            ] }
                        />
                        <ToggleControl
                            label={ __("Outline", 'ctxblocks')}
                            checked={ attributes.outline }
                            onChange={ (outline) => setAttributes({ outline }) 
                            }
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;