/**
 * External dependencies
 */


/**
 * Internal dependencies
 */
import Inspector from './inspector';
import CustomAppender from './appender';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';


class DescriptionListEdit extends Component {

    constructor() {
        super( ...arguments );
        this.insertNewItem = this.insertNewItem.bind( this );
    }
    
    insertNewItem() {
        const { clientId } = this.props;
        const newEvent = createBlock( 'ctx-blocks/description-item' );
        const parentBlock = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ];
        const childBlocks = parentBlock.innerBlocks;
        dispatch( 'core/block-editor' ).insertBlock( newEvent, childBlocks.length, clientId );
    }

    render() {


        const {
            attributes,
			className,
		} = this.props;

		const {
			dividers
        } = attributes;

        var classes = [
            className,
            dividers ? "ctx-divider" : false
		].filter(Boolean).join(" ")

        const TEMPLATE = [
			[
				'ctx-blocks/description-item'
			]
		];

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>
					<InnerBlocks 
						allowedBlocks={['ctx-blocks/description-item']}
						template={TEMPLATE}
						renderAppender={ () => <CustomAppender onClick={ this.insertNewItem } /> }
					/>	
				</div>
			</Fragment>
		);
    };
}

export default DescriptionListEdit;