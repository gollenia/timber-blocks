import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
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
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Darstellung', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label={ __("Linien zwischen den Listeneinträgen zeigen", 'ctxblocks')}
                                checked={ dividers }
                                onChange={ (event) => setAttributes({ dividers: event }) 
                                }
                            />
                        </PanelRow>
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;