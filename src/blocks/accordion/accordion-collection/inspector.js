/**
 * Wordpress dependencies
 */
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
                        /* translators: behaviour */
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label={ __("Show as tabs on large screens", 'ctx-blocks')}
                                checked={ tabsOnDesktop }
                                onChange={ (value) => setAttributes({ tabsOnDesktop: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Open multiple accordions", 'ctx-blocks')}
                                checked={ multiOpen }
                                onChange={ (value) => setAttributes({ multiOpen: value, noCollapse: false }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("All accordions closable", 'ctx-blocks')}
                                checked={ noCollapse }
                                onChange={ (value) => setAttributes({ noCollapse: value, multiOpen: false }) 
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