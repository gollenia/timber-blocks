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
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={ __("Hinweis kann vom Benutzer geschlossen werden", 'ctxblocks')}
                            checked={ isDismissable }
                            onChange={ (isDismissable) => setAttributes({ isDismissable }) }
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;