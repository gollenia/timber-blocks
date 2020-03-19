/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
		} = this.props;

		const {
            tabsOnDesktop,
            oneAtATime
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
                                onChange={ (tabs) => setAttributes({ tabs }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Immer nur ein Feld geöffnet lassen", 'ctxblocks')}
                                checked={ oneAtATime }
                                onChange={ (tabs) => setAttributes({ tabs }) 
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