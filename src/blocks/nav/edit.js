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
			categoriesList: [],
			pagesList: [],
			allPages: []
		};
	}

	componentDidMount() {
		
		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp-json/wp/v2/categories' ),
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
		
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp-json/wp/v2/pages?_fields=id,title&parent=' + this.props.attributes.parentPage ),
		} ).then(
			( pagesList ) => {
				if ( this.isStillMounted ) {
					this.setState( { pagesList } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { pagesList: [] } );
				}
			}
		);

		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp-json/wp/v2/pages?_fields=id,title' ),
		} ).then(
			( allPages ) => {
				if ( this.isStillMounted ) {
					this.setState( { allPages } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { allPages: [] } );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	updatePages() {
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( '/wp-json/wp/v2/pages?_fields=id,title' ),
		} ).then(
			( allPages ) => {
				if ( this.isStillMounted ) {
					this.setState( { allPages } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { allPages: [] } );
				}
			}
		);
	}

	

	render() {

		
		
		const {
			attributes,
			latestPosts
		} = this.props;

		const {
            dropDown,
            depth,
            showIcons,
            isPrimary,
            showActive,
            parent,
            categories,
            dataType,
            limit,
            orderBy,
            order,
            textAlignment
        } = attributes;

		const { 
			categoriesList,
			pagesList,
			allPages
		} = this.state;		

			console.log(pagesList);

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

		const displayPosts = Array.isArray( latestPosts ) && latestPosts.length > limit ? latestPosts.slice( 0, limit ) : latestPosts;

		const hasPages = Array.isArray( pagesList ) && pagesList.length;

		const displayPages = Array.isArray( pagesList ) && pagesList.length > limit ? pagesList.slice( 0, limit ) : pagesList;


		const postClasses = [
			
		].filter(Boolean).join(" ");

		return (
			
			<Fragment>
				<Inspector
						{ ...this.props }
						categoriesList={ categoriesList }
						postCount={ latestPosts && latestPosts.length }
						allPages={ allPages }				
						hasPosts={ hasPosts }
				/>
				<Toolbar
						{ ...this.props }
				/>
				<Fragment>
					{ dataType == "pages" &&
						<Fragment>
							{ !hasPages && <div><Spinner /> Suche nach Seiten...</div> }
							{displayPages.map(post => {     
												
												return( 
													<div className="ctx-post">
														
														
														<ul className="ctx-post-content">
															<li>{post.title.rendered.trim()}</li>
						
														</ul>
													</div>
												);
											})}
						</Fragment>
					}
					{ dataType == "posts" && 
						<Fragment>
							{ !hasPosts && <div><Spinner /> Suche nach Beiträgen...</div> }
								{ hasPosts && <div className={postClasses}>
									{displayPosts.map(post => {     
																
										return( 
											<div className="ctx-post">
												
												
												<ul className="ctx-post-content">
													<li>{post.title.rendered.trim()}</li>

												</ul>
											</div>
										);
									})}
								</div>}
								</Fragment> }
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