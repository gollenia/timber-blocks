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
                            onChange={(event) => {setAttributes( { widthSmall: event })}}
                            value={ widthSmall }
                        />
                        <RangeControl
                            label="Spalten auf mittleren Geräten"
                            max={ 6 }
                            min={ 0 }
                            help="Zum Beispiel Tablets oder alte PCs"
                            onChange={(event) => {setAttributes( { widthMedium: event })}}
                            value={ widthMedium }
                        />
                        <RangeControl  
                            label="Spalten auf großen Geräten"
                            max={ 6 }
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
                            onChange={(event) => {setAttributes( { auto: event })}}
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;