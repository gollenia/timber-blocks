/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody, TextControl, PanelRow,  __experimentalNumberControl as NumberControl } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes: {
                title,
                maxValue,
                currentValue,
                showValues,
                unit,
                prefixedUnit,
                thousandSeparators,
                decimalPlaces
            },
            setAttributes,
            setColorBar,
            colorBar,
            setColorBackground,
            colorBackground,
        } = this.props;

        
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
                        <NumberControl
                            label={__("Max value", 'ctx-blocks')}
                            value={ maxValue }
                            onChange={ (event) => setAttributes({ maxValue: event }) }
                        />
                        <NumberControl
                            label={__("Current value", 'ctx-blocks')}
                            value={ currentValue }
                            onChange={ (event) => setAttributes({ currentValue: event }) }
                        />
                       
                        
                    </PanelBody>
                    <PanelBody
                        title={__("Labels", "ctx-blocks")}
                        initialOpen={true}
                    >
                       
                        <PanelRow>
                        <CheckboxControl 
                            label={__("Show Values", "ctx-blocks")}
                            checked={ showValues }
                            onChange={ (event) => setAttributes({ showValues: event })}
                        />
                        </PanelRow>
                        { showValues && <PanelRow>
                        <CheckboxControl 
                            label={__("Separate Thousands", "ctx-blocks")}
                            checked={ thousandSeparators }
                            onChange={ (event) => setAttributes({ thousandSeparators: event })}
                            hidden={ !showValues }
                        />
                        </PanelRow> }
                        { showValues && <PanelRow>
                            <RangeControl
                                label={__("Decimal places", "ctx-blocks")}
                                value={ decimalPlaces }
                                onChange={(event) => {setAttributes( { decimalPlaces: event })}}
                                min={ 0 }
                                max={ 4 }
                                hidden={ !showValues }
                            />
                        </PanelRow>}
                        { showValues && <PanelRow>
                            <TextControl
                                label={__("Unit", 'ctx-blocks')}
                                value={ unit }
                                onChange={ (event) => setAttributes({ unit: event }) }
                                hidden={ !showValues }
                            />
                        </PanelRow>}
                        { ( showValues || unit != "" ) && <PanelRow>
                        <CheckboxControl 
                            label={__("Show unit before Value", "ctx-blocks")}
                            checked={ prefixedUnit }
                            onChange={ (event) => setAttributes({ prefixedUnit: event })}
                            hidden={ unit == "" || !showValues }
                        />
                        </PanelRow> }
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;