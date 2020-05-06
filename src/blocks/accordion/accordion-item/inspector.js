/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';

class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            itemColor,
            setItemColor
        } = this.props;

		const {
            initialOpen
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__("Verhalten", "ctx-blocks")}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label={__("Beim Laden der Seite geöffnet", "ctx-blocks")}
                            checked={ initialOpen }
                            onChange={ (event) => setAttributes({ initialOpen: event }) }
                        />    
                    </PanelBody>
                    <PanelColorSettings
                        title="Farbe"
                        colorSettings={[
                            {
                                label: 'Farbe',
                                onChange: setItemColor ,
                                value: itemColor.color,
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