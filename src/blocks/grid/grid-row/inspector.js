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
            divider,
            isMasnory,
            parallaxEffect,
            childrenWidthSmall,
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
                            label="Spalten auf kleinen Bildschirmen"
                            max={ 6 }
                            min={ 1 }
                            help="Insbesondere Smartphones"
                            onChange={(value) => {setAttributes( { childrenWidthSmall: value })}}
                            value={ childrenWidthSmall }
                        />
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
                            max={ 3 }
                            min={ 0 }
                            onChange={(value) => {setAttributes( { gapSize: value })}}
                            value={ gapSize }
                        />
                        <CheckboxControl
                            label="Trennlinien"
                            checked={divider}
                            onChange={(value) => {setAttributes( { divider: value })}}
                        />
                        <CheckboxControl
                            label="Als Mauerwerk darstellen"
                            checked={isMasnory}
                            onChange={(value) => {setAttributes( { isMasnory: value })}}
                        />
                        <RangeControl
                            label="Parallax-Effekt"
                            max={ 300 }
                            min={ 0 }
                            onChange={(value) => {setAttributes( { parallaxEffect: value })}}
                            value={ parallaxEffect }
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