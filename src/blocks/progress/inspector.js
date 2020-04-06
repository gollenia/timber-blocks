/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';

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
            max,
            current
        } = attributes;
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Werte"
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Maximum", 'ctxblocks')}
                            value={ max }
                            onChange={ (value) => setAttributes({ max: parseInt(value) }) }
                        />
                        <TextControl
                            label={__("Aktueller Wert", 'ctxblocks')}
                            value={ current }
                            onChange={ (value) => setAttributes({ current: parseInt(value) }) }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;