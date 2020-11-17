/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody } from '@wordpress/components';

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
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;