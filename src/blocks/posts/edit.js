/**
 * Internal dependencies
 */
import { AlignmentToolbar, BlockControls, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, Icon, PanelBody, PanelRow, QueryControls, RangeControl, ToggleControl } from '@wordpress/components';
import { format } from '@wordpress/date';
import icons from './icons.js';


import { get } from 'lodash';

/**
 * Wordpress dependencies
 */
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';


export default function Edit({ attributes, setAttributes }) {

	const {
		limit,
		columnsSmall,
		columnsMedium,
		columnsLarge,
		showImages,
		dropShadow,
		imageSize,
		style, 
        hover,
        showTag,
        showCategory,
		textAlignment,
		showDate,
		roundImages,
		excerptLength,
		category,
		order,
		orderBy
	} = attributes;

	const { categoryList } = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = { hide_empty: true };
		return {
			categoryList: getEntityRecords( 'taxonomy', 'category', query ),
		};
	}, [] );


	const postList = useSelect( ( select ) => {
		const { getEntityRecords, getMedia } = select( coreStore );		
		const categories = category == "" ? [] : [category]
		const query = { 
			categories: categories, 
			per_page: limit, 
			order,
			orderby: orderBy,
		};
		const posts = getEntityRecords( 'postType', 'post', query );
		
		if(! Array.isArray( posts )) {
			return posts;
		}

		return posts.map( ( post ) => {
				if ( ! post.featured_media ) return post;

				const image = getMedia( post.featured_media );
				
				let url = get(
					image,
					[
						'media_details',
						'sizes',
						'medium',
						'source_url',
					],
					null
				);
				if ( ! url ) {
					url = get( image, 'source_url', null );
				}
				const featuredImageInfo = {
					url,
					// eslint-disable-next-line camelcase
					alt: image?.alt_text,
				};
				return { ...post, featuredImageInfo };
		  }) 
		
	}, [ category, limit, order, orderBy] );


	const getCategoriesList = ( ) => {
		if ( ! categoryList?.length ) {
			return [];
		}

		return categoryList;
	};

	const getPosts = ( ) => {
		if ( ! postList?.length ) {
			return [];
		}

		return postList;
	};

	

	const blockProps = useBlockProps({
		className: [
			"columns-" + columnsLarge,
			showImages ? "hasImage" : false,
			dropShadow ? "shadow" : false,

			"style-" + style,
			"text-" + textAlignment,
			roundImages ? "round-images" : false
		].filter(Boolean).join(" ")
	});

	const inspectorControls = (
		<InspectorControls>
				<PanelBody
					title={__('Data', 'ctx-blocks')}
					initialOpen={true}
				>
					<QueryControls
						order={ order }
						orderBy={ orderBy }
						categoriesList={ getCategoriesList() }
						selectedCategoryId={ category }
						numberOfItems= {limit}
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { category: value } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { limit: value } ) }
					/>
					
				</PanelBody>
				<PanelBody
					title={__('Appearance', 'ctx-blocks')}
					initialOpen={true}
				>
					
					<RangeControl
						label={__("Columns on small screens", 'ctx-blocks')}
						max={ 6 }
						min={ 1 }
						help={__("ex. Smartphones", 'ctx-blocks')}
						onChange={(value) => {setAttributes( { columnsSmall: value })}}
						value={ columnsSmall }
					/>
				
			
					<RangeControl
						label={__("Columns on medium screens", 'ctx-blocks')}
						max={ 6 }
						min={ 1 }
						help={__("Tablets and smaller screens", 'ctx-blocks')}
						onChange={(value) => {setAttributes( { columnsMedium: value })}}
						value={ columnsMedium }
					/>
		
					<RangeControl
						label={__("Columns on large screens", 'ctx-blocks')}
						max={ 6 }
						min={ 1 }
						help={__("Desktop screens", 'ctx-blocks')}
						onChange={(value) => {setAttributes( { columnsLarge: value })}}
						value={ columnsLarge }
					/>
					
				</PanelBody>

				<PanelBody
					title={__('Posts', 'ctx-blocks')}
					initialOpen={true}
				>
                    <PanelRow>
						<ToggleControl
							label={ __("Drop shadow", 'ctx-blocks')}
							checked={ dropShadow }
							onChange={ (value) => setAttributes({ dropShadow: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __("Hover effect", 'ctx-blocks')}
							checked={ hover }
							onChange={ (value) => setAttributes({ hover: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __("Show post images", 'ctx-blocks')}
							checked={ showImages }
							onChange={ (value) => setAttributes({ showImages: value }) }
						/>
					</PanelRow>
					<PanelRow>
						<label className="components-base-control__label" htmlFor="inspector-range-control-4">Stil</label>
						<div className="styleSelector">
								<Button onClick={ () => setAttributes({ style: "list" }) } className={style == "list" ? "active" : ""}>
									<Icon size="64" className="icon" icon={icons.list}/>
									<div>Liste</div>
								</Button>
								<Button onClick={ () => setAttributes({ style: "cards" }) } className={style == "cards" ? "active" : ""}>
									<Icon size="64" className="icon" icon={icons.cards}/>
									<div>Karten</div>
								</Button>
						</div>
						
					</PanelRow>
					{ showImages &&
					<Fragment>
						<PanelRow>
							<ToggleControl
								label={ __("Round images", 'ctx-blocks')}
								checked={ roundImages }
								onChange={ (value) => setAttributes({ roundImages: value }) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __("Show date", 'ctx-blocks')}
								checked={ showDate }
								onChange={ (value) => setAttributes({ showDate: value }) }
							/>
						</PanelRow>
                        <PanelRow>
							<ToggleControl
								label={ __("Show Tag", 'ctx-blocks')}
								checked={ showTag }
								onChange={ (value) => setAttributes({ showTag: value }) }
							/>
						</PanelRow>
                        <PanelRow>
							<ToggleControl
								label={ __("Show Category", 'ctx-blocks')}
								checked={ showCategory }
								onChange={ (value) => setAttributes({ showCategory: value }) }
							/>
						</PanelRow>
						<RangeControl
							label={__("Image size", 'ctx-blocks')}
							max={ 100 }
							min={ 0 }
							help={__("Percent of width", 'ctx-blocks')}
							onChange={(value) => {setAttributes( { imageSize: value })}}
							value={ imageSize }
						/>
						
					</Fragment>
					}
					<RangeControl
						label={__("Length of preview text", 'ctx-blocks')}
						max={ 200 }
						min={ 0 }
						help={__("Number of words", 'ctx-blocks')}
						onChange={(value) => {setAttributes( { excerptLength: value })}}
						value={ excerptLength }
					/>
				</PanelBody>
			</InspectorControls>
	)

	return (
		
		<>
			{ inspectorControls }
			<BlockControls>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ (event) => setAttributes({ textAlignment: event }) }
				/>
			</BlockControls>
			<div { ...blockProps }>
				
					{getPosts().map((post, index) => {
					
					// unfortunatedly the excerpt sometimes comes only prerendered, which diusturbs trimming to excerpt length
					let excerpt = post.excerpt.raw == "" ? post.excerpt.rendered : post.excerpt.raw;
					if(post.excerpt.raw == "") {
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt = excerptElement.textContent || excerptElement.innerText || '';
					}

					const postExcerpt = excerptLength < excerpt.trim().split( ' ' ).length ? (
							<>
								{ excerpt
									.trim()
									.split( ' ', excerptLength )
									.join( ' ' ) }
								{ __( '…' ) }
								<a href={ post.link } rel="noopener noreferrer">
									{ __( 'Read more' ) }
								</a>
							</>
						) : (
							excerpt
						);

					return <div className="post-card" key={index}>
						{showImages && <img src={post?.featuredImageInfo?.url} />}
						<div className="content">
						<h4>{post.title.rendered}</h4>
						{ showDate && <span>{format("j. F Y", post.date)}</span> }
						{ style == "cards" && <p>{postExcerpt}</p>}
						</div>
					</div>
					})}
				
			</div>
		</>
	);

}