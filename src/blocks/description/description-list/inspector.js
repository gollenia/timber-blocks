import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

const Inspector = (props) => {

		const {
			attributes,
            setAttributes,
		} = props;

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

export default Inspector;