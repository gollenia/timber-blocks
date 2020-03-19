import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl, TextControl } from '@wordpress/components';

class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            itemColor,
            setItemColor
        } = this.props;

		const {
            title,
            initialOpen
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Optionen"
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label="Beim Laden geöffnet"
                            help="Soll die Karte beim Laden geöffnet sein?"
                            checked={ initialOpen }
                            onChange={ (event) => setAttributes({ initialOpen: event }) }
                        />    
                    </PanelBody>
                    <PanelBody
                        title={__('Farbeinstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelColorSettings
                            colorSettings={[
                                {
                                    label: 'Farbe',
                                    onChange: setItemColor ,
                                    value: itemColor.color,
                                    disableCustomColors: true,
                                }
                            ]}
                        />
                        
                       
                        
                    </PanelBody>
                    
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;