/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody, SelectControl, PanelRow } from '@wordpress/components';

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
			gapSize,
            equalizer,
            autoFlow,
            autoFlowDense,
            autoFlowRows,
            autoFlowDirection,
            childrenWidthLarge,
            childrenWidthMedium
        } = attributes;

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Optionen"
                        initialOpen={true}
                    >
                        <RangeControl  
                            label="Spalten auf mittleren Bildschirmen"
                            max={ 6 }
                            min={ 1 }
                            help="Z.B. Tablets"
                            onChange={(value) => {setAttributes( { childrenWidthMedium: value })}}
                            value={ childrenWidthMedium }
                        />
                        <RangeControl  
                            label="Spalten auf großen Geräten"
                            max={ 6 }
                            min={ 1 }
                            help="Normale Bildschirme"
                            onChange={(value) => {setAttributes( { childrenWidthLarge: value })}}
                            value={ childrenWidthLarge }
                        />
                        <RangeControl
                            label="Abstand zwischen den Spalten"
                            max={ 12 }
                            min={ 0 }
                            onChange={(value) => {setAttributes( { gapSize: value })}}
                            value={ gapSize }
                        />
                        <CheckboxControl
                            label="Alle Spalten auf gleiche Höhe bringen"
                            checked={equalizer}
                            onChange={(value) => {setAttributes( { equalizer: value })}}
                        />
                         

                    </PanelBody>
                    <PanelBody
                        title="Auto Flow"
                        initialOpen={false}
                    >
                        <CheckboxControl
                            label="Auto Flow aktivieren"
                            checked={autoFlow}
                            onChange={(value) => {setAttributes( { autoFlow: value })}}
                        />
                        <SelectControl
                            label='Anordnung'
                            value={ autoFlowDirection }
                            disabled={!autoFlow}
                            options={ [
                                { label: 'Reihen', value: 'row' },
                                { label: 'Spalten', value: 'col' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { autoFlowDirection: event } ) } }
                        />
                        <CheckboxControl
                            label="Abstände minimieren"
                            checked={autoFlowDense}
                            disabled={!autoFlow}
                            onChange={(value) => {setAttributes( { autoFlowDense: value })}}
                        />
                        <RangeControl  
                            label="Anzahl der Reihen"
                            max={ 12 }
                            min={ 1 }
                            disabled={!autoFlow && autoFlowDirection == 'col'}
                            onChange={(value) => {setAttributes( { autoFlowRows: value })}}
                            value={ autoFlowRows }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;