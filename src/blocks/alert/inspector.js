/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';

const Inspector = (props) => {
	
		const {
			attributes: {
                isDismissable
            },
            setAttributes,
            alertColor,
            setAlertColor,
		} = props;

		return (
			
				<InspectorControls>
                    <PanelBody
                        title={__('Behaviour', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <ToggleControl
                            label={ __("User can dismiss the alert", 'ctx-blocks')}
                            checked={ isDismissable }
                            onChange={ (value) => setAttributes({ isDismissable: value }) }
                        />
                        
                    </PanelBody>
                    <PanelColorSettings
                        title={__("Color", 'ctx-blocks')}
                        initialOpen={true}
                        colorSettings={[
                            {
                                label: __("Background color of the alert", 'ctx-blocks'),
                                onChange: setAlertColor,
                                value: alertColor.color,
                                disableCustomColors: true,
                            },
                        ]}
                    />
                    
                </InspectorControls>
			
		);
	
}

export default Inspector;