import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class ColumnEdit extends Component {

	
	render() {
		const {
			attributes,
		} = this.props;

		const {
			numbersOnLarge,
			dividers
		} = attributes;

		var classes = [
			"ctx-cols",
			dividers ? "dividers" : false
		].filter(Boolean).join(" ");

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={{columnCount: numbersOnLarge}} className={classes}>
					<InnerBlocks 	
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'ctx-blocks/button', 'ctx-blocks/image']}	
					/>
				</div>    
			</Fragment>
		);
	};

}