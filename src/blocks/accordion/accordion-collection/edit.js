import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class AccordionCollectionEdit extends Component {
	render() {
		const {
			attributes,
			className,
		} = this.props;

		const {
			oneAtATime,
		} = attributes

		var classes = [
			className
		].join(" ");

		

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={"accordion" + classes}>
					
					<InnerBlocks 
						allowedBlocks={['ctx-blocks/accordion-item']}
					/>
					
				</div>
				
			</Fragment>
		);
	};

}