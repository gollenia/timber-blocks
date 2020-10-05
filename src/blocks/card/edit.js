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
			imageRound,
			imageWidth,
			imageBorder,
			image
		} = attributes;

		const TEMPLATE = [
			[
				'core/heading', 
				{
					placeholder: 'Titel',
					className: 'card-header'
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
			imageRound ? "ctx-image-round" : "",
			imageBorder ? "ctx-image-border" : "",
			hover ? "ctx-hover" : false,
			`text-${textAlign}`,
			`image-${imagePosition}`,
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
				<div class="ctx-grabber">
					<label>Karte</label>
				</div>
				<div style={style} className={classes}>
					{ image &&
						<img 
						width={ imagePosition == "top" || imagePosition == "bottom" ? `${imageWidth}%` : ''} 
						height={ imagePosition == "left" || imagePosition == "right" ? `${imageWidth}%` : ''} 
						src={imageRound ? image.sizes.qmedium.url : image.sizes.small.url} alt="Card image cap"/>
					}
					<div className="content">
					<InnerBlocks 
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'ctx-blocks/button', 'ctx-blocks/image', 'ctx-blocks/nav', 'ctx-blocks/posts', 'ctx-blocks/grid-row', 'ctx-blocks/description-list', 'ctx-blocks/accordion-collection', 'ctx-blocks/modal', 'ctx-blocks/progress']}
						template={TEMPLATE}
					/>
					</div>
					
				</div>
				
			</Fragment>
		);
	};

}