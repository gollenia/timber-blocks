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
            numbersOnSmall,
            numbersOnLarge,
            numbersOnMedium,
            dividers
        } = attributes;
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Verhalten"
                        initialOpen={true}
                    >
                        <RangeControl
                            label="Spalten auf kleinen Bildschirmen"
                            max={ 6 }
                            min={ 0 }
                            help="Zum Beispiel Smartphones"
                            onChange={(value) => {setAttributes( { numbersOnSmall: value })}}
                            value={ numbersOnSmall }
                        />
                        <RangeControl
                            label="Spalten auf mittleren Geräten"
                            max={ 6 }
                            min={ 0 }
                            help="Zum Beispiel Tablets oder alte PCs"
                            onChange={(value) => {setAttributes( { numbersOnMedium: value })}}
                            value={ numbersOnMedium }
                        />
                        <RangeControl  
                            label="Spalten auf großen Geräten"
                            max={ 6 }
                            min={ 0 }
                            help="Normale Computer-Bildschirme"
                            onChange={(value) => {setAttributes( { numbersOnLarge: value })}}
                            value={ numbersOnLarge }
                        />
                        <CheckboxControl
                            label="Trennlinie"
                            helt="Die Spalte fällt auf die minimale Breite zusammen"
                            checked={dividers}
                            onChange={(value) => {setAttributes( { dividers: value })}}
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;