/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody, Button, SelectControl, RadioControl } from '@wordpress/components';

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
            hasParallax,
            childrenWidthSmall,
            childrenWidthLarge,
            childrenWidthMedium
        } = attributes;
        
        function removeImage () {
            setAttributes({backgroundImage: ""});
        }

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
                            onChange={(event) => {setAttributes( { childrenWidthSmall: event })}}
                            value={ childrenWidthSmall }
                        />
                        <RangeControl  
                            label="Spalten auf mittleren Bildschirmen"
                            max={ 6 }
                            min={ 1 }
                            help="Z.B. Tablets"
                            onChange={(event) => {setAttributes( { childrenWidthMedium: event })}}
                            value={ childrenWidthMedium }
                        />
                        <RangeControl  
                            label="Spalten auf großen Geräten"
                            max={ 6 }
                            min={ 1 }
                            help="Normale Bildschirme"
                            onChange={(event) => {setAttributes( { childrenWidthLarge: event })}}
                            value={ childrenWidthLarge }
                        />
                        <RangeControl
                            label="Abstand zwischen den Spalten"
                            max={ 3 }
                            min={ 0 }
                            onChange={(event) => {setAttributes( { gapSize: event })}}
                            value={ gapSize }
                        />
                        <CheckboxControl
                            label="Trennlinien"
                            value={divider}
                            onChange={(event) => {setAttributes( { divider: event })}}
                        />
                        <CheckboxControl
                            label="Als Mauerwerk darstellen"
                            value={isMasnory}
                            onChange={(event) => {setAttributes( { isMasnory: event })}}
                        />
                        <RangeControl
                            label="Parallaxe-Effekt"
                            max={ 300 }
                            min={ 0 }
                            onChange={(event) => {setAttributes( { hasParallax: event })}}
                            value={ hasParallax }
                        />
                        <CheckboxControl
                            label="Alle Spalten auf gleiche Höhe bringen"
                            value={equalizer}
                            onChange={(event) => {setAttributes( { equalizer: event })}}
                        />

                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;