import Inspector from './inspector';
import Toolbar from './toolbar';

import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class CardEdit extends Component {

	render() {
		const {
			attributes,
			className,
			backgroundColor,
			textColor,
			hover
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
			hover ? "ctx-hover" : false,
			`text-${textAlign}`,
			className || false
		].filter(Boolean).join(" ");
		
		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<Toolbar
					{ ...this.props }
				/>
				<div style={style} className={classes}>
					{imagePosition === "top" && image &&
						<img className="card-img-top" src={image.sizes.small.url} alt="Card image cap"/>
					}
					<InnerBlocks 
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'ctx-blocks/button', 'ctx-blocks/image']}
						template={TEMPLATE}
					/>
					{imagePosition === "bottom" && image &&
						<img className="card-img-bottom" src={image.sizes.small.url} alt="Card image cap"/>
					}
				</div>
				
			</Fragment>
		);
	};

}