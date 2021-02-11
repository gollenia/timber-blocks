/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment, RawHTML } from '@wordpress/element';
//import {RichText} from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { isUndefined, pickBy, some } from 'lodash';
import { Spinner } from '@wordpress/components'


class PostsEdit extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			posts: [],
			categoriesList: []
		};
	}

	componentDidMount() {
		
		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp/v2/categories' ),
		} ).then(
			( categoriesList ) => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList: [] } );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	render() {
		
		const {
			attributes,
			latestPosts
		} = this.props;

		const {
            limit,
            columnsSmall,
			columnsMedium,
			excerptLength,
			showDate,
			style,
			textAlignment,
			imageSize,
			roundImages,
            columnsLarge,
            showImages,
        } = attributes;

		const { categoriesList } = this.state;		

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		const displayPosts = Array.isArray( latestPosts ) && latestPosts.length > limit ? latestPosts.slice( 0, limit ) : latestPosts;

		const hasFeaturedImage = some( displayPosts, 'featured_media_object' );

		const postClasses = [
			roundImages ? "ctx-round-image" : false,
			`cols-small-${columnsSmall}`,
			`cols-medium-${columnsMedium}`,
			`cols-large-${columnsLarge}`,
			style === "list" ? "ctx-image-side" : "ctx-image-top",
			"posts",
			`ctx-text-align-${textAlignment}`
		].filter(Boolean).join(" ");

		return (
			
			<Fragment>
				<Inspector
						{ ...this.props }
						categoriesList={ categoriesList }
						postCount={ latestPosts && latestPosts.length }
						hasFeaturedImage={ hasFeaturedImage }
						hasPosts={ hasPosts }
				/>
				<Toolbar
						{ ...this.props }
				/>
				<Fragment>
				{ !hasPosts && <div><Spinner /> Suche nach Beiträgen...</div> }
				{ hasPosts && <div className={postClasses}>
					{displayPosts.map(post => {     

						
						var featuredImageUrl = post.featured_media_object ? post.featured_media_object.media_details.url : null;
						if (post.featured_media_object) {
							if (post.featured_media_object.media_details.sizes.qlarge) {
								featuredImageUrl = post.featured_media_object ? post.featured_media_object.media_details.sizes.qlarge.source_url : null;
							}
						}

						let excerpt = post.excerpt.rendered;
						if ( post.excerpt.raw === '' ) {
							excerpt = post.content.raw;
						}

						const rawDate = new Date(post.date);
						const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
						const date = rawDate.toLocaleDateString(navigator.language, options);

						const excerptElement = document.createElement( 'div' );
						excerptElement.innerHTML = excerpt;
						excerpt = excerptElement.textContent || excerptElement.innerText || ''
						
						return( 
							<div className="ctx-post">
								
								{ showImages && featuredImageUrl &&
									<div style={{width: `${imageSize}%`}} className="ctx-post-image">
										<img  src={featuredImageUrl}></img>
									</div>
								}
								<div className="ctx-post-content">
									<h4>{post.title.rendered.trim()}</h4>
									{ showDate &&
										<time>{date}</time>
									}
									{ excerptLength > 0 &&
										<p>
											<RawHTML key="html">
												{ excerptLength < excerpt.trim().split( ' ' ).length ?
													excerpt.trim().split( ' ', excerptLength ).join( ' ' ) + '…' :
													excerpt.trim().split( ' ' ).join( ' ' ) 
												}
											</RawHTML>
										</p>
									}
									</div>
							</div>
						);
					})}
				</div>}
				</Fragment>
				
			
			</Fragment>
		);
	};

}

export default compose( [
	withSelect( ( select, props ) => {
		const { 
			order, 
			orderBy, 
			categories,
			limit
		} = props.attributes;
		const { getEntityRecords } = select( 'core' );
		const latestPostsQuery = pickBy( {
			categories,
			order,
			orderby: orderBy,
			per_page: limit,
		}, ( value ) => ! isUndefined( value ) );

		let latestPosts = getEntityRecords( 'postType', 'post', latestPostsQuery );
		if ( latestPosts ) {
			latestPosts = latestPosts.map( ( post ) => {
				return {
					...post,
					featured_media_object: post.featured_media && select( 'core' ).getMedia( post.featured_media ),
				};
			} );
		}

		return {
			latestPosts,
		};
	} ),
] )( PostsEdit );