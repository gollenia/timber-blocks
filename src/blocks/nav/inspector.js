/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, ComboboxControl, SelectControl, PanelRow, Text, QueryControls } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

class Inspector extends Component {
    
	render() {
		const {
			attributes,
            setAttributes,
            allPages,
            allCategories,
		} = this.props;

		const {
            dropDown,
            depth,
            showIcons,
            isPrimary,
            showActive,
            parentPage,
            parentCategory,
            dataType,
            limit,
            orderBy,
            order,
        } = attributes;

        let pageListOptions = [ { value: 0, label: 'Wähle eine Seite'} ];
        if( allPages.length > 0 ) {
			allPages.forEach((post) => {
                pageListOptions.push({value: post.id, label:post.title.rendered});
			});
        }
        
        let categoryListOptions = [ { value: 0, label: 'Wähle eine Kategorie'} ];
        if( allCategories.length > 0 ) {
			allCategories.forEach((category) => {
                categoryListOptions.push({value: category.id, label:category.name});
			});
        }
        
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Daten', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <SelectControl
                            label={ __( 'Datenquelle' ) }
                            value={ dataType } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => { setAttributes( { dataType: value }) } }
                            options={ [
                                { value: 'pages', label: 'Seiten' },
                                { value: 'posts', label: 'Beiträge' },
                                { value: 'categories', label: 'Kategorien' },
                            ] }
                        />
                        { dataType === "posts" &&
                            <QueryControls
                                order={ order }
                                orderBy={ orderBy }
                                categoriesList={ allCategories }
                                selectedCategoryId={ parentCategory }
                                numberOfItems= {limit}
                                onOrderChange={ ( value ) => setAttributes( { order: value } ) }
                                onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                                onCategoryChange={ ( value ) => setAttributes( { parentCategory: '' !== value ? value : undefined } ) }
                                onNumberOfItemsChange={ ( value ) => setAttributes( { limit: value } ) }
                            />
                        }
                        { dataType === "pages" &&
                        <SelectControl
                            label={ __( 'Elternseite' ) }
                            value={ parentPage } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => setAttributes( { parentPage: parseInt(value) } ) }
                            options={ pageListOptions }
                        />
                        }
                        { dataType === "categories" &&
                        <SelectControl
                            label={ __( 'Aus Hauptkategorie' ) }
                            value={ parentCategory } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => setAttributes( { parentCategory: parseInt(value) } ) }
                            options={ categoryListOptions }
                        />
                        }
                        <RangeControl
                                label={__("Limit", 'ctx-blocks')}
                                max={ 50 }
                                min={ 1 }
                                help={__("Wieviele Menü-Punkte sollen maximal gezeigt werden?", 'ctx-blocks')}
                                onChange={(value) => {setAttributes( { limit: value })}}
                                value={ limit }
                            />
                    </PanelBody>
                    <PanelBody
                        title={__('Allgemeine Darstellung', 'ctx-blocks')}
                        initialOpen={true}
                    >
                       
                       <PanelRow>
                            <ToggleControl
                                label={ __("Als Dropdownmenü", 'ctx-blocks')}
                                checked={ dropDown }
                                onChange={ (value) => setAttributes({ dropDown: value }) }
                            />
                            
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Icons anzeigen", 'ctx-blocks')}
                                checked={ showIcons }
                                onChange={ (value) => setAttributes({ showIcons: value }) }
                            />
                            
                        </PanelRow>
                        <RangeControl
                                label={__("Tiefe", 'ctx-blocks')}
                                max={ 3 }
                                min={ 1 }
                                help={__("Wieviele Ebenen sollen gezeigt werden?", 'ctx-blocks')}
                                onChange={(value) => {setAttributes( { depth: value })}}
                                value={ depth }
                            />
                        <PanelRow>
                            <ToggleControl
                                label={ __("Groß darstellen", 'ctx-blocks')}
                                checked={isPrimary}
                                onChange={ (value) => setAttributes({ isPrimary: value }) }
                            />
                            
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Aktiven Menüpunkt hervorheben", 'ctx-blocks')}
                                checked={showActive}
                                onChange={ (value) => setAttributes({ showActive: value }) }
                            />
                        </PanelRow>
                      
                    </PanelBody>

                    
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;