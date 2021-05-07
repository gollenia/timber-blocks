/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody, TextControl, PanelRow } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            setColorBar,
            colorBar,
            setColorBackground,
            colorBackground,
        } = this.props;

		const {
            percent,
            title,
            showValue
        } = attributes;
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelColorSettings
                        title={__("Colors", "ctx-blocks")}
                        colorSettings={[
                            {
                                label: __('Color for low values', 'ctx-blocks'),
                                onChange: setColorBar ,
                                value: colorBar.color,
                                disableCustomColors: true,
                            },
                            {
                                label: __('Color for medium values', 'ctx-blocks'),
                                onChange: setColorBackground,
                                value: colorBackground.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                    <PanelBody
                        title={__("Values", "ctx-blocks")}
                        initialOpen={true}
                    >
                        <RangeControl
                            label={__("Progresss Bar Value", "ctx-blocks")}
                            value={ percent }
                            onChange={(event) => {setAttributes( { percent: event })}}
                            min={ 0 }
                            max={ 100 }
                        />
                        
                    </PanelBody>
                    <PanelBody
                        title={__("Labels", "ctx-blocks")}
                        initialOpen={true}
                    >
                        <PanelRow>
                        <TextControl
                            label={__("Description", 'ctx-blocks')}
                            value={ title }
                            placeholder={__("Text under Progress Bar", "ctx-blocks")}
                            onChange={ (event) => setAttributes({ title: event }) }
                        />
                        </PanelRow>
                        <PanelRow>
                        <CheckboxControl 
                            label={__("Show Value", "ctx-blocks")}
                            checked={ showValue }
                            onChange={ (event) => setAttributes({ showValue: event })}
                        />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;