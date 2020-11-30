/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

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
            widthSmall,
            widthLarge,
            widthMedium,
            expand,
            auto,
            mobilePosition
        } = attributes;

        
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Verhalten"
                        initialOpen={true}
                        help="Einzelne Spalten lassen sich zu größeren verbinden"
                    >
                        <RangeControl
                            label="Spaltenzusammenfassung auf kleinen Bildschirmen"
                            max={ 12 }
                            min={ 0 }
                            help="Zum Beispiel Smartphones"
                            onChange={(event) => {setAttributes( { widthSmall: event })}}
                            value={ widthSmall }
                        />
                        <RangeControl
                            label="Spaltenzusammenfassung auf mittleren Geräten"
                            max={ 12 }
                            min={ 0 }
                            help="Zum Beispiel Tablets oder alte PCs"
                            onChange={(event) => {setAttributes( { widthMedium: event })}}
                            value={ widthMedium }
                        />
                        <RangeControl  
                            label="Spaltenzusammenfassung auf großen Geräten"
                            max={ 12 }
                            min={ 0 }
                            help="Normale Computer-Bildschirme"
                            onChange={(event) => {setAttributes( { widthLarge: event })}}
                            value={ widthLarge }
                        />
                        <CheckboxControl
                            label="Automatisch expandieren"
                            help="Die Spalte nimmt automatisch den restlichen Platz ein"
                            checked={expand}
                            onChange={(event) => {setAttributes( { expand: event })}}
                        />
                        <CheckboxControl
                            label="Zusammenfallen"
                            helt="Die Spalte fällt auf die minimale Breite zusammen"
                            checked={auto}
                            on
                            Change={(event) => {setAttributes( { auto: event })}}
                        />
                        <PanelRow>
                        <SelectControl
                                    label='Position auf Mobilgeräten'
                                    help='Das Element kann auf Mobilgeräten ganz an den Anfang oder ans Ende verschoben werden.'
                                    value={ mobilePosition }
                                    options={ [
                                        { label: 'Normal', value: '' },
                                        { label: 'Anfang', value: 'first' },
                                        { label: 'Ende', value: 'last' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { mobilePosition: event } ) } }
                                />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;