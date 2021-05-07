/**
 * Internal dependencies
 */

import Toolbar from './toolbar';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useSelect, getCurrentPostId } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, Icon, SelectControl, PanelRow } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const {
		showIcons,
		showActive,
		parentPage,
		parentCategory,
		dataType,
		limit,
		orderBy,
		order,
	} = attributes;

	const categoryList = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = {  };
		var result = getEntityRecords( 'taxonomy', 'category', query )
		const categoryListOptions = [ { value: 0, label: __('Select a category', "ctx-blocks")} ];
		if (result == null) {
			result = [];
		}
		if( result.length > 0 ) {
			result.forEach((category) => {
				categoryListOptions.push({value: category.id, label:category.name});
			});
		}
		return categoryListOptions;
	}, [dataType] );
	

	const pageList = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );		
		var pages = getEntityRecords( 'postType', 'page', { per_page: 100 } );
		if ( pages == null ) {
			pages = [];
		}
		
		const pageListOptions = [ { value: 0, label: __('Select a parent page', "ctx-blocks")} ];
        if( pages.length > 0 ) {
			pages.forEach((post) => {
                pageListOptions.push({value: post.id, label:post.title.rendered});
			});
    	}
		return pageListOptions;
	} );


	const pages = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );		
		
		var query = { 
			per_page: limit,
			order: order,
			orderby: orderBy,
		};
		query.parent = parentPage != 0 ? parentPage : undefined;
		query.categories = parentCategory != 0 ? [parentCategory] : undefined;
		const pages = getEntityRecords( 'postType', 'page', query );
		return pages ? pages : [];
		
	}, [ parentPage, limit, parentCategory, order, orderBy ] );

	

	const inspectorControls = (<InspectorControls>
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
	
	
	</InspectorControls>)

		
		return (
			
			<>
				{ inspectorControls }
				<ul {...useBlockProps()}>
					{ pages != [] && <>
					{pages.map((page, index) => {
					var liClass = page.id == wp.data.select("core/editor").getCurrentPostId() ? " active" : ""
					
					return <li className={"nav-item" + liClass} key={index}>
						{ showIcons && <Icon icon="arrow-right-alt2"/> }{page.title.raw}
					</li>
					})} </> }
				</ul>
		
			</>		
		);


}