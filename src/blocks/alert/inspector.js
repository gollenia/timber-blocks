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
                    <PanelColorSettings
                        title={__("Farbe")}
                        initialOpen={true}
                        colorSettings={[
                            {
                                label: "Farbe des Hinweises",
                                onChange: setAlertColor,
                                value: alertColor.color,
                                disableCustomColors: true,
                            },
                        ]}
                    />
                    <PanelBody
                        title={__('Verhalten', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <ToggleControl
                            label={ __("Hinweis kann vom Benutzer geschlossen werden", 'ctxblocks')}
                            checked={ isDismissable }
                            onChange={ (value) => setAttributes({ isDismissable: value }) }
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;