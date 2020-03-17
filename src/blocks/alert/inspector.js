/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { ToggleControl, PanelBody } from '@wordpress/components';
/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
            alertColor,
            setAlertColor,
		} = this.props;

		const {
 			showFooter,
  			dismissable,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Optionen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelColorSettings
                            colorSettings={[
                                {
                                    label: 'Farbe',
                                    onChange: setAlertColor ,
                                    value: alertColor.color,
                                    disableCustomColors: true,
                                },
                            ]}
                        />
                        <ToggleControl
                            label={ __("'X' zum Schließen", 'ctxblocks')}
                            checked={ dismissable }
                            onChange={ (dismissable) => setAttributes({ dismissable }) }
                        />
                        <ToggleControl
                            label={ __("Fußzeile", 'ctxblocks')}
                            checked={ showFooter }
                            onChange={ (showFooter) => setAttributes({ showFooter }) }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;