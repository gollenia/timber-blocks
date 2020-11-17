import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { Icon, Button} from '@wordpress/components'
import CustomAppender from './appender';
import icons from './icons.js'
import { createBlock } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
		this.insertNewItem = this.insertNewItem.bind( this );
	}

	
	
	insertNewItem() {
		const { clientId } = this.props;
		const newEvent = createBlock( 'ctx-blocks/grid-column' );
		const parentBlock = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ];
		const childBlocks = parentBlock.innerBlocks;
		
		dispatch( 'core/block-editor' ).insertBlock( newEvent, childBlocks.length, clientId );
	}

	
	
	render() {

		const {
			attributes,
		} = this.props;

		
		const {
			gapSize,
            equalizer,
            divider,
			childrenWidthLarge
		} = attributes;

		const TEMPLATE = [
			[
				'ctx-blocks/grid-column' 
			],
			[
				'ctx-blocks/grid-column'
			]
		];

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
                    <div className="ctx-row-header">
                        <label>{`Reihe (${childrenWidthLarge} Spalten)`}</label>
						<div className="ctx-row-icons">
							{ equalizer && <Icon className="ctx-row-icon" icon={icons.equalizer}/> }
							{ divider && <Icon className="ctx-row-icon" icon={icons.divider}/> }
						</div>
                    </div>
					<div>
					</div>
					<div className={`ctx-row ctx-row-cols-gap-${gapSize} ctx-row-cols-${childrenWidthLarge}`}>
						<InnerBlocks 	
							allowedBlocks={['ctx-blocks/grid-column']}
							template={TEMPLATE}	
							renderAppender={ () => <CustomAppender onClick={ this.insertNewItem } /> }
						/>
				    </div>

			</Fragment>
		);
	};

}