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
                        title="Verhalten"
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Beim Laden der Seite geöffnet"
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