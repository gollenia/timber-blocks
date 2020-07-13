/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, ComboboxControl, SelectControl, PanelRow, Text, QueryControls } from '@wordpress/components';


class Inspector extends Component {

    setParentPage(value) {
        this.props.setAttributes({parentPage: value})
        this.updatePages();
    }
    
	render() {
		const {
			attributes,
            setAttributes,
            categoriesList,
            allPages
		} = this.props;

		const {
            dropDown,
            depth,
            showIcons,
            isPrimary,
            showActive,
            parentPage,
            categories,
            dataType,
            limit,
            orderBy,
            order,
            textAlignment
        } = attributes;
        
        console.log(parentPage);

        let options= [ { value: 0, label: 'Wähle eine Seite'} ];
        if( allPages.length > 0 ) {
			allPages.forEach((post) => {
			  options.push({value: post.id, label:post.title.rendered});
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
                        { dataType != "pages" &&
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
                        }
                        { dataType === "pages" &&
                        <SelectControl
                            label={ __( 'Elternseite' ) }
                            value={ parentPage } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => { this.setParentPage( value ) } }
                            options={ options }
                        />
                        }
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