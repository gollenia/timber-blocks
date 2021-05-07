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

        let pageListOptions = [ { value: 0, label: __('Select a parent page', "ctx-blocks")} ];
        if( allPages.length > 0 ) {
			allPages.forEach((post) => {
                pageListOptions.push({value: post.id, label:post.title.rendered});
			});
        }
        
        let categoryListOptions = [ { value: 0, label: __('Select a category', "ctx-blocks")} ];
        if( allCategories.length > 0 ) {
			allCategories.forEach((category) => {
                categoryListOptions.push({value: category.id, label:category.name});
			});
        }
        
        
		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Data', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <SelectControl
                            label={ __( 'Data source', "ctx-blocks" ) }
                            value={ dataType } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => { setAttributes( { dataType: value }) } }
                            options={ [
                                { value: 'pages', label:  __('Pages', "ctx-blocks") },
                                { value: 'posts', label:  __('Posts', "ctx-blocks") },
                                { value: 'categories', label:  __('Categories', "ctx-blocks") },
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
                            label={ __( 'Parent page', "ctx-blocks") }
                            value={ parentPage } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => setAttributes( { parentPage: parseInt(value) } ) }
                            options={ pageListOptions }
                        />
                        }
                        { dataType === "categories" &&
                        <SelectControl
                            label={ __( 'Category (ingluding it\'s children)', "ctx-blocks" ) }
                            value={ parentCategory } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => setAttributes( { parentCategory: parseInt(value) } ) }
                            options={ categoryListOptions }
                        />
                        }
                        <RangeControl
                                label={__("Limit", 'ctx-blocks')}
                                max={ 50 }
                                min={ 1 }
                                help={__("How meny items should be displayed?", 'ctx-blocks')}
                                onChange={(value) => {setAttributes( { limit: value })}}
                                value={ limit }
                            />
                    </PanelBody>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                       
                       <PanelRow>
                            <ToggleControl
                                label={ __("Dropdown menu", 'ctx-blocks')}
                                checked={ dropDown }
                                onChange={ (value) => setAttributes({ dropDown: value }) }
                            />
                            
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Show Icons", 'ctx-blocks')}
                                checked={ showIcons }
                                onChange={ (value) => setAttributes({ showIcons: value }) }
                            />
                            
                        </PanelRow>
                        <RangeControl
                                label={__("Depth", 'ctx-blocks')}
                                max={ 3 }
                                min={ 1 }
                                help={__("How many levels to recurse?", 'ctx-blocks')}
                                onChange={(value) => {setAttributes( { depth: value })}}
                                value={ depth }
                            />
                        <PanelRow>
                            <ToggleControl
                                label={ __("Large text", 'ctx-blocks')}
                                checked={isPrimary}
                                onChange={ (value) => setAttributes({ isPrimary: value }) }
                            />
                            
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Highlight currently loaded menu item", 'ctx-blocks')}
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