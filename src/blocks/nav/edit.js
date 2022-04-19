/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import { ToggleControl, RangeControl, PanelBody, Icon, SelectControl, PanelRow } from '@wordpress/components';

export default function Edit(props) {

	const {
		attributes: {
			showIcons,
			showActive,
			parentPage,
			parentCategory,
			dataType,
			limit,
			orderBy,
			order}
	} = props;

	


	const pages = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );		
		
		let query = { 
			per_page: limit,
			order: order,
			orderby: orderBy,
		};
		query.parent = parentPage != 0 ? parentPage : undefined;
		query.categories = parentCategory != 0 ? [parentCategory] : undefined;
		const pages = getEntityRecords( 'postType', 'page', query );
		return pages ? pages : [];
		
	}, [ parentPage, limit, parentCategory, order, orderBy ] );



		
		return (
			
			<>
				<Inspector 
					{ ...props }
					allPages={pages}
				/>
				<div {...useBlockProps()}>
				<label className='ctx:control__label'>{__("Navigation", "ctx-blocks")}</label>
				<ul>
					{ pages != [] && <>
					{pages.map((page, index) => {
					const liClass = page.id == wp.data.select("core/editor").getCurrentPostId() ? " active" : ""
					
					return <li className={"nav-item" + liClass} key={index}>
						{ showIcons && <Icon icon="arrow-right-alt2"/> }{page.title.raw}
					</li>
					})} </> }
				</ul>
				</div>
		
			</>		
		);


}