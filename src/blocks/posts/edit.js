/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';



export default class PostsEdit extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			posts: []
		};
	}

	render() {
		
		const {
			attributes,
			setAttributes,
			className,
			title,
		} = this.props;

		const {
            selectedCategory,
            selectedType,
            limit,
            columnsSmall,
            columnsMedium,
            columnsLarge,
            showImages,
            style
        } = attributes;

		
        wp.apiFetch({
            url: `/wp-json/wp/v2/${selectedType}?per_page=3&categories=${selectedCategory}`
        }).then(
            posts => {
               this.setState({posts: posts})
        })
        

		if(this.state.posts == undefined) {
			return;
		}

		const newLocal = this.state.posts;
		let posts = newLocal;

		return (
			
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className="posts">
					
				{ this.state.posts == [] && <div>Keine Posts gefunden</div> }
				{ this.state.posts && this.state.posts.length > 0 && <div>
					<h2>Posts</h2>
					{posts.map(post => {     return( 
						<div>
							<span>POST:</span>
							{post.title.rendered}
						</div>)
	})}
				</div>}
				</div>
				
			
			</Fragment>
		);
	};

}