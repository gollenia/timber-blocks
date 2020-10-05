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
            widthSmall,
            widthLarge,
            widthMedium,
            expand,
            auto
        } = attributes;

        const marks = [
            {
                value: 0,
                label: 'Auto',
            },
            {
                value: 1,
                label: '1/4',
            },
            {
                value: 2,
                label: '1/3',
            },
            {
                value: 3,
                label: '1/2',
            },
            {
                value: 4,
                label: '2/3',
            },
            {
                value: 5,
                label: '3/4',
            },
            {
                value: 6,
                label: '1/1',
            }
        ];
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Verhalten"
                        initialOpen={true}
                        help="Die Zahlen entsprechen Bruchwerten. Die Darstellung der Bruchwerte wird von Wordpress erst im August unterstützt"
                    >
                        <RangeControl
                            label="Breite auf kleinen Bildschirmen"
                            max={ 6 }
                            min={ 0 }
                            marks = {marks}
                            help="Zum Beispiel Smartphones"
                            onChange={(event) => {setAttributes( { widthSmall: event })}}
                            value={ widthSmall }
                        />
                        <RangeControl
                            label="Breite auf mittleren Geräten"
                            max={ 6 }
                            min={ 0 }
                            marks = {marks}
                            help="Zum Beispiel Tablets oder alte PCs"
                            onChange={(event) => {setAttributes( { widthMedium: event })}}
                            value={ widthMedium }
                        />
                        <RangeControl  
                            label="Breite auf großen Geräten"
                            max={ 6 }
                            min={ 0 }
                            marks = {marks}
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
                            onChange={(event) => {setAttributes( { auto: event })}}
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;