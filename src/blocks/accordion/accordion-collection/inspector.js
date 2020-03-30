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
            tabsOnDesktop,
            multiOpen,
            noCollapse
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
                                label={ __("Auf dem Desktop als Tabs anzeigen", 'ctxblocks')}
                                checked={ tabsOnDesktop }
                                onChange={ (event) => setAttributes({ tabsOnDesktop: event }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Dürfen mehrere Felder gleichzeitig geöffnet werden?", 'ctxblocks')}
                                checked={ multiOpen }
                                onChange={ (event) => setAttributes({ multiOpen: event, noCollapse: false }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Dürfen alle Felder geschlossen werden?", 'ctxblocks')}
                                checked={ noCollapse }
                                onChange={ (event) => setAttributes({ noCollapse: event, multiOpen: false }) 
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