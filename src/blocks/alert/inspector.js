/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';

class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
            alertColor,
            setAlertColor,
		} = this.props;

		const {
  			isDismissable,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
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
			</Fragment>
		);
	}
}

export default Inspector;