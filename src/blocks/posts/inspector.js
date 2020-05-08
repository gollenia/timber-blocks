/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, SelectControl, PanelRow, Spinner, Text } from '@wordpress/components';


class Inspector extends Component {

    constructor() {
		super(...arguments);
		this.state = {
			categories: []
		};
    }
    
	render() {
		const {
			attributes,
            setAttributes
		} = this.props;

		const {
            selectedCategory,
            selectedType,
            limit,
            columnsSmall,
            columnsMedium,
            columnsLarge,
            showImages,
            style
        } = attributes;



            wp.apiFetch({
                url: '/wp-json/wp/v2/categories'
            }).then(
                categories => {
                    this.setState( {categories: categories});
                }
            )
        

        if(!this.state.categories) {
            return "Warten";
        }

        if(this.state.categories && this.state.categories.length === 0) {
            return "Keine Kategorien gefunden"
        }

        const newLocal = this.state.categories;
        let categories = newLocal;
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Daten', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                        {!categories &&
                            <Text><Spinner /> Bitte Warten...</Text>
                        }
                        {categories &&
                            <SelectControl
                                    label='Kategorie'
                                    value={ selectedCategory }
                                    options={ [{
                                        label: "Alle",
                                        slug: ""
                                    }].concat(categories.map( category => {
                                        return {
                                            label: category.name,
                                            value: category.id
                                        }
                                    })) }
                                    onChange={ ( event ) => { setAttributes( { selectedCategory: event } ) } }
                            />
                            }
                            </PanelRow>
                            <PanelRow>
                            <SelectControl
                                    label='Seiten-Typen'
                                    value={ selectedType }
                                    options={ [
                                        { label: 'Beiträge', value: 'posts' },
                                        { label: 'Seiten', value: 'pages' }
                                    ]
                                     }
                                    onChange={ ( event ) => { setAttributes( { selectedType: event } ) } }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={__('Darstellung', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                            <SelectControl
                                    label='Darstellungsart'
                                    value={ style }
                                    options={ [
                                        { label: 'Liste', value: 'list' },
                                        { label: 'Gitter', value: 'grid' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { style: event } ) } }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Bilder anzeigen", 'ctx-blocks')}
                                checked={ showImages }
                                onChange={ (value) => setAttributes({ showImages: value }) }
                            />
                        </PanelRow>
                       
                            <RangeControl
                                label="Spalten auf kleinen Bildschirmen"
                                max={ 6 }
                                min={ 1 }
                                help="Insbesondere Smartphones"
                                onChange={(value) => {setAttributes( { columnsSmall: value })}}
                                value={ columnsSmall }
                            />
                     
                    
                            <RangeControl
                                label="Spalten auf mittleren Bildschirmen"
                                max={ 6 }
                                min={ 1 }
                                help="Insbesondere Smartphones"
                                onChange={(value) => {setAttributes( { columnsMedium: value })}}
                                value={ columnsMedium }
                            />
                
                            <RangeControl
                                label="Spalten auf großen Bildschirmen"
                                max={ 6 }
                                min={ 1 }
                                help="Insbesondere Smartphones"
                                onChange={(value) => {setAttributes( { columnsLarge: value })}}
                                value={ columnsLarge }
                            />
                      
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;