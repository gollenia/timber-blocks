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
			isFirst,
			isLast,
			imageWidth,
			imageBorder,
			image
		} = attributes;

		const TEMPLATE = [
			[
				'core/heading', 
				{
					placeholder: __('Title', 'ctx-blocks'),
					className: 'card-header',
					level: 4
				}
			],
			[
				'core/paragraph',
				{
					placeholder: __('Your content goes here...', 'ctx-blocks'),
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
			imageRound ? "ctx-image-round" : false,
			imageBorder ? "ctx-image-border" : false,
			isFirst ? "ctx-is-first" : false,
			isLast ? "ctx-is-last" : false,
			hover ? "ctx-hover" : false,
			`text-${textAlign}`,
			`image-${imagePosition}`
		].filter(Boolean).join(" ");

		var imageSide = ( imagePosition == "left" || imagePosition == "right");
		var isSVG = ( image != null ? image.subtype == "svg+xml" : false );
		
		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<Toolbar
					{ ...this.props }
				/>
				<div class="ctx-grabber">
					<label>{__('Card', 'ctx-blocks')}</label>
				</div>
				<div style={style} className={classes}>
					{ image && imageRound && !isSVG &&
						<img
							style={{
								width: `${imageWidth}%`,
								height: `${imageWidth}%`
							}} 
							src={image.sizes.qsmall.url} alt={image.filename}
						/>
					}
					{ image && !imageRound && imageSide && !isSVG &&
						<div className="image-side"
							style={{
								backgroundImage: `url(${image.sizes.small.url})`,
								width: `${imageWidth}%`
							}}
						>

						</div>
					}
					{ image && !imageRound && !imageSide && !isSVG &&
						<img 
						width={`${imageWidth}%`} 
						src={image.sizes.small.url} alt={image.filename}/>
					}
					{ isSVG && 
						<img 
						width={`${imageWidth}%`} 
						src={image.url} alt={image.filename}/>
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