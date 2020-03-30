import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class CardEdit extends Component {

	render() {
		const {
			attributes,
			className,
			backgroundColor,
			textColor
		} = this.props;

		const {
			imagePosition,
			textAlign,
			image
		} = attributes;

		const TEMPLATE = [
			[
				'core/heading', 
				{
					placeholder: 'Titel',
					className: 'uk-card-title'
				}
			],
			[
				'core/paragraph',
				{
					placeholder: 'Beschreibung oder Inhalt',
					className: 'card-text'
				}
			]
		];
	
		var style = {
			background: backgroundColor.color, 
			color: textColor.color}
		;

		var classes = [
			"ctx-card",
			textAlign,
			className
		].join(" ");
		
		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={style} className={classes}>
					{imagePosition === "top" && image.url !== "" &&
						<img className="card-img-top" src={image.sizes.small.url} alt="Card image cap"/>
					}
					<InnerBlocks 
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'ctx-blocks/button', 'core/coverImage']}
						template={TEMPLATE}
					/>
					{imagePosition === "bottom" && image.url !=="" &&
						<img className="card-img-bottom" src={image.sizes.small.url} alt="Card image cap"/>
					}
				</div>
				
			</Fragment>
		);
	};

}