/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, SelectControl, PanelRow, Text, QueryControls } from '@wordpress/components';


class Inspector extends Component {

    
	render() {
		const {
			attributes,
            setAttributes,
            categoriesList
		} = this.props;

		const {
            limit,
            columnsSmall,
            columnsMedium,
            columnsLarge,
            showImages,
            dropShadow,
            imageSize,
            imageBesidesText,
            roundImages,
            excerptLength,
            categories,
            order,
            orderBy
        } = attributes;

        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Daten', 'ctx-blocks')}
                        initialOpen={true}
                    >
  
                            <QueryControls
                                order={ order }
                                orderBy={ orderBy }
                                categoriesList={ categoriesList }
                                selectedCategoryId={ categories }
                                numberOfItems= {limit}
                                onOrderChange={ ( value ) => setAttributes( { order: value } ) }
                                onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                                onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
                                onNumberOfItemsChange={ ( value ) => setAttributes( { limit: value } ) }
                            />
                            
                    </PanelBody>
                    <PanelBody
                        title={__('Allgemeine Darstellung', 'ctx-blocks')}
                        initialOpen={true}
                    >
                       
                        <RangeControl
                            label={__("Spalten auf kleinen Bildschirmen", 'ctx-blocks')}
                            max={ 6 }
                            min={ 1 }
                            help={__("Smartphones", 'ctx-blocks')}
                            onChange={(value) => {setAttributes( { columnsSmall: value })}}
                            value={ columnsSmall }
                        />
                    
                
                        <RangeControl
                            label={__("Spalten auf mittleren Bildschirmen")}
                            max={ 6 }
                            min={ 1 }
                            help={__("Tablets und kleine Monitore", 'ctx-blocks')}
                            onChange={(value) => {setAttributes( { columnsMedium: value })}}
                            value={ columnsMedium }
                        />
            
                        <RangeControl
                            label={__("Spalten auf großen Bildschirmen", 'ctx-blocks')}
                            max={ 6 }
                            min={ 1 }
                            help={__("Normale Desktop-PCs", 'ctx-blocks')}
                            onChange={(value) => {setAttributes( { columnsLarge: value })}}
                            value={ columnsLarge }
                        />
                      
                    </PanelBody>

                    <PanelBody
                        title={__('Darstellung der Posts', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                            <ToggleControl
                                label={ __("Schatten bei Hover", 'ctx-blocks')}
                                checked={ dropShadow }
                                onChange={ (value) => setAttributes({ dropShadow: value }) }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Bilder anzeigen", 'ctx-blocks')}
                                checked={ showImages }
                                onChange={ (value) => setAttributes({ showImages: value }) }
                            />
                        </PanelRow>
                        { showImages &&
                        <Fragment>
                            <PanelRow>
                                <ToggleControl
                                    label={ __("Bilder rund darstellen", 'ctx-blocks')}
                                    checked={ roundImages }
                                    onChange={ (value) => setAttributes({ roundImages: value }) }
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label={ __("Bilder neben Text", 'ctx-blocks')}
                                    checked={ imageBesidesText }
                                    onChange={ (value) => setAttributes({ imageBesidesText: value }) }
                                />
                            </PanelRow>
                            <RangeControl
                                label={__("Bildgröße", 'ctx-blocks')}
                                max={ 100 }
                                min={ 0 }
                                help={__("Prozent der Breite", 'ctx-blocks')}
                                onChange={(value) => {setAttributes( { imageSize: value })}}
                                value={ imageSize }
                            />
                           
                        </Fragment>
                        }
                        <RangeControl
                            label={__("Länge des Vorschautextes", 'ctx-blocks')}
                            max={ 200 }
                            min={ 0 }
                            help={__("Anzahl der Wörter", 'ctx-blocks')}
                            onChange={(value) => {setAttributes( { excerptLength: value })}}
                            value={ excerptLength }
                        />
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;