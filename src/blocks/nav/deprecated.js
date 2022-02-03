/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, ComboboxControl, SelectControl, PanelRow, Text, QueryControls } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const Inspector = (props) => {
    
		const {
			attributes,
            setAttributes,
            allPages,
            allCategories,
		} = props;

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
			<InspectorControls>
	<PanelBody
		title={__('Data', 'ctx-blocks')}
		initialOpen={true}
	>
		
		
	
		<SelectControl
			label={ __( 'Parent page', "ctx-blocks") }
			value={ parentPage } // e.g: value = [ 'a', 'c' ]
			onChange={ ( value ) => setAttributes( { parentPage: parseInt(value) } ) }
			options={ pageList }
		/>

		
		
		
		<SelectControl
			label={ __( 'Category (ingluding it\'s children)', "ctx-blocks" ) }
			value={ parentCategory } // e.g: value = [ 'a', 'c' ]
			onChange={ ( value ) => setAttributes( { parentCategory: parseInt(value) } ) }
			options={ categoryList }
		/>

		<SelectControl
			label={ __( 'Order by', "ctx-blocks") }
			value={ orderBy } // e.g: value = [ 'a', 'c' ]
			onChange={ ( value ) => setAttributes( { orderBy: value } ) }
			options={ [ 
				{ value: "date", label: __("Date", 'ctx-blocks') },
				{ value: "title", label: __("Title", 'ctx-blocks') },
				{ value: "id", label: __("ID", 'ctx-blocks') },
			 ] } 
		/>

		<SelectControl
			label={ __( 'Order', "ctx-blocks") }
			value={ order } // e.g: value = [ 'a', 'c' ]
			onChange={ ( value ) => setAttributes( { order: value } ) }
			options={ [
				{ value: "desc", label: __("Descending", 'ctx-blocks') },
				{ value: "asc", label: __("Ascending", 'ctx-blocks')} 
				
			 ] }
		/>
		
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
				label={ __("Show Icons", 'ctx-blocks')}
				checked={ showIcons }
				onChange={ (value) => setAttributes({ showIcons: value }) }
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
		);
	
}

export default Inspector;