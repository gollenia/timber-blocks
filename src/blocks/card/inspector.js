/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { RichText, ToggleControl, TextControl, PanelBody, SelectControl, withState } from '@wordpress/components';
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
 			style,
  			dismissable,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Alert settings', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <SelectControl
                            label={ __( 'Select style:', 'ctxblocks') }
                            value={ attributes.style } 
                            onChange={ (style) => setAttributes({ style }) } 
                            options={ [
                                { value: 'primary', label: __('Primary', 'ctxblocks') },
                                { value: 'secondary', label: __('Secondary', 'ctxblocks') },
                                { value: 'success', label: __('Success', 'ctxblocks') },
                                { value: 'info', label: __('Info', 'ctxblocks') },
                                { value: 'warning', label: __('Warning', 'ctxblocks') },
                                { value: 'danger', label: __('Danger', 'ctxblocks') },
                                { value: 'light', label: __('Light', 'ctxblocks') },
                                { value: 'dark', label: __('Dark', 'ctxblocks') }
                            ] }
                        />

                        
                       
                        <ToggleControl
                            label={ __("Closable by user", 'ctxblocks')}
                            checked={ attributes.dismissable }
                            onChange={ (dismissable) => setAttributes({ dismissable }) 
                            }
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;