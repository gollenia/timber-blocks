import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
		} = this.props;

		const {
            dividers,
        } = attributes;
        
		return (

				<InspectorControls>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label={ __("Lines as separators", 'ctx-blocks')}
                                checked={ dividers }
                                onChange={ (event) => setAttributes({ dividers: event }) 
                                }
                            />
                        </PanelRow>
                        
                    </PanelBody>
                </InspectorControls>
	
		);
	}
}

export default Inspector;