/**
 * Internal dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { format } from '@wordpress/date';

import { get } from 'lodash';

/**
 * Wordpress dependencies
 */
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import blockGapStyle from '../../common/utils/blockGapStyle';
import Inspector from './inspector';

export default function Edit( props ) {
	const { attributes, setAttributes, className } = props;
	const {
		limit,
		columnsSmall,
		columnsMedium,
		columnsLarge,
		showImages,
		linkAsButton,
		dropShadow,
		styleType,
		hover,
		showTag,
		showCategory,
		textAlignment,
		showDate,
		roundImages,
		excerptLength,
		category,
		order,
		orderBy,
	} = attributes;

	const { categoryList } = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const query = { hide_empty: true };
		return {
			categoryList: getEntityRecords( 'taxonomy', 'category', query ),
		};
	}, [] );

	const postList = useSelect(
		( select ) => {
			const { getEntityRecords, getMedia } = select( coreStore );
			const categories = category == '' ? [] : [ category ];
			const query = {
				categories: categories,
				per_page: limit,
				order,
				orderby: orderBy,
				_embed: true,
			};
			const posts = getEntityRecords( 'postType', 'post', query );

			if ( ! Array.isArray( posts ) ) {
				return posts;
			}

			return posts.map( ( post ) => {
				if ( ! post.featured_media ) return post;

				const image = getMedia( post.featured_media );

				let url = get(
					image,
					[ 'media_details', 'sizes', 'medium', 'source_url' ],
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
				const category = get( post, [ '_embedded', 'wp:term', 0 ] );
				return { ...post, featuredImageInfo, category };
			} );
		},
		[ category, limit, order, orderBy ]
	);

	const getPosts = () => {
		if ( ! postList?.length ) {
			return [];
		}

		return postList;
	};

	const blockProps = useBlockProps( {
		className: [
			className,
			showImages ? 'hasImage' : false,
			dropShadow ? 'shadow' : false,
			hover ? 'hover' : false,
			'style-' + styleType,
			'text-' + textAlignment,
			roundImages ? 'round-images' : false,
		]
			.filter( Boolean )
			.join( ' ' ),
	} );

	const style = {
		gap: blockGapStyle(
			props.attributes?.style?.spacing?.blockGap || '1rem'
		),
	};

	return (
		<>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				categoryList={ categoryList }
				category={ category }
			/>
			<div { ...blockProps } style={ { ...blockProps.style, ...style } }>
				{ getPosts().map( ( post, index ) => {
					// unfortunatedly the excerpt sometimes comes only prerendered, which diusturbs trimming to excerpt length
					let excerpt =
						post.excerpt.raw == ''
							? post.excerpt.rendered
							: post.excerpt.raw;
					if ( post.excerpt.raw == '' ) {
						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt =
							excerptElement.textContent ||
							excerptElement.innerText ||
							'';
					}

					const postExcerpt =
						excerptLength < excerpt.trim().split( ' ' ).length ? (
							<>
								{ excerpt
									.trim()
									.split( ' ', excerptLength )
									.join( ' ' ) }
								{ __( '…' ) }
							</>
						) : (
							excerpt
						);

					const postAuthor = get(
						post,
						[ '_embedded', 'author', 0 ],
						false
					);
					const postCategory = get(
						post,
						[ '_embedded', 'wp:term', 0, 0 ],
						false
					);
					const postTags = get(
						post,
						[ '_embedded', 'wp:term', 1 ],
						false
					);

					return (
						<div className="post-card" key={ index }>
							{ styleType !== 'mini' && (
								<div className="image">
									<img src={ post?.featuredImageInfo?.url } />
								</div>
							) }
							{ showDate && styleType === 'mini' && (
								<div className="date-box">
									<span>{ format( 'j', post.date ) }</span>
									<span>{ format( 'M', post.date ) }</span>
								</div>
							) }
							<div className="content">
								{ showDate && styleType !== 'mini' && (
									<span>
										{ format( 'j. F Y', post.date ) }
									</span>
								) }
								<h4>{ post.title.rendered }</h4>

								{ styleType == 'cards' && (
									<p>{ postExcerpt }</p>
								) }
								<div className="taxonomy">
									{ showTag && postTags && post._embedded && (
										<div className="tags">
											{ postTags.map( ( tag, index ) => (
												<span key={ index }>
													{ tag.name }
												</span>
											) ) }
										</div>
									) }
									{ showCategory && postCategory && (
										<>
											<span>{ postCategory.name }</span>
										</>
									) }
								</div>
								{ linkAsButton && styleType !== 'mini' && (
									<div className="link-button">
										<span>{ __( 'Read more' ) }</span>
									</div>
								) }
							</div>
							{ linkAsButton && styleType == 'mini' && (
								<div className="link-button">
									<i className="material-icons">more_horiz</i>
								</div>
							) }
						</div>
					);
				} ) }
			</div>
		</>
	);
}
