import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

export default class AccordionItemEdit extends Component {


	render() {
		const {
			attributes,
			className,
			setAttributes,
			itemColor
		} = this.props;

		const {
			initialOpen,
			title
		} = attributes;

	
		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={className}>
					<TextControl
                            value={ title }
							onChange={ (title) => setAttributes({ title }) }
							placeholder="Titel eingeben"
                    />
					<InnerBlocks 
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'core/button', 'core/coverImage']}
					/>
					
				</div>
				
			</Fragment>
		);
	};

}