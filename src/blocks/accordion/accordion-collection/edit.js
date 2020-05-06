/**
 * Internal dependencies.
 */
import Inspector from './inspector';
import CustomAppender from './appender';

/**
 * Wordpress dependencies.
 */
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

export default class AccordionCollectionEdit extends Component {

	constructor() {
		super( ...arguments );
		this.insertNewItem = this.insertNewItem.bind( this );
	}
	
	insertNewItem() {
		const { clientId } = this.props;
		const newEvent = createBlock( 'ctx-blocks/accordion-item' );
		const parentBlock = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ];
		const childBlocks = parentBlock.innerBlocks;
		dispatch( 'core/block-editor' ).insertBlock( newEvent, childBlocks.length, clientId );
	}

	render() {
		const {
			className,
		} = this.props;


		var classes = [
			className,
			"accordion"
		].filter(item => item !== "").join(" ");

		
		const TEMPLATE = [
			[
				'ctx-blocks/accordion-item'
			]
		];

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>
					<InnerBlocks 
						allowedBlocks={['ctx-blocks/accordion-item']}
						template={TEMPLATE}
						renderAppender={ () => <CustomAppender onClick={ this.insertNewItem } /> }
					/>	
				</div>
			</Fragment>
		);
	};

}