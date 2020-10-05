/**
 * Wordpress dependencies
 */
import Inspector from './inspector';
import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default class AccordionItemEdit extends Component {

	render() {
		const {
			attributes,
			className,
			setAttributes,
			itemColor
		} = this.props;

		const {
			title
		} = attributes;

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={className}>
					<div className="ctx-title-holder" style={{background: itemColor.color}}>
						<RichText
							tagName="div"
							label={__("Text", 'ctx-blocks')}
							value={ title }
							onChange={ (value) => setAttributes({ title: value }) }
							placeholder={__("Titel", 'ctx-blocks')}
							keepPlaceholderOnFocus={true}
						/>
					</div>
					<InnerBlocks 
						
					/>
					
				</div>
				
			</Fragment>
		);
	};

}