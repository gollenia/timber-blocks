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
const { serverSideRender: ServerSideRender } = wp;


export default class NavEdit extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			posts: [],
			allPages: [],
			allCategories: []
		};
	}

	componentDidMount() {
		
		this.isStillMounted = true;

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

		this.fetchRequest = apiFetch( {
            path: addQueryArgs( '/wp-json/wp/v2/categories' ),
        } ).then(
            ( allCategories ) => {
                if ( this.isStillMounted ) {
					this.setState( { allCategories } );
					console.log(allCategories);
                }
            }
        ).catch(
            () => {
                if ( this.isStillMounted ) {
                    this.setState( { allCategories: [] } );
                }
            }
		);
		
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}


	

	render() {

		const { 
			allCategories,
			allPages
		} = this.state;		

		return (
			
			<Fragment>
				<Inspector
					{ ...this.props }
					allCategories={ allCategories }
					allPages={ allPages }	
				/>
				<Toolbar
						{ ...this.props }
				/>
				<Fragment>
					<ServerSideRender
						block="ctx-blocks/nav"
						attributes={ this.props.attributes }
            		/>
				</Fragment>
			</Fragment>		
		);
	};

}