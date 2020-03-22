import Inspector from './inspector';
import CustomAppender from './appender';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
//import { compose } from '@wordpress/compose';//

export default class AccordionCollectionEdit extends Component {

	constructor() {
		super( ...arguments );
		this.insertNewItem = this.insertNewItem.bind( this );
	}
	

	insertNewItem() {
		console.log(this.props);
		const { clientId, innerBlocks } = this.props;
		const newEvent = createBlock( 'ctx-blocks/accordion-item' );
		const parentBlock = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ];
		const childBlocks = parentBlock.innerBlocks;
		dispatch( 'core/block-editor' ).insertBlock( newEvent, childBlocks.length, clientId );
	}

	render() {
		const {
			attributes,
			className,
			clientId
		} = this.props;

		const {select} = wp.data;

		var classes = [
			className
		].join(" ");

		
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
				<div className={"accordion" + classes}>
					
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