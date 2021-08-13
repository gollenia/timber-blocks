import Inspector from './inspector';
import Toolbar from './toolbar';
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/paragraph', 'core/shortcode', 'core/heading', 'core/list', 'ctx-blocks/button', 'ctx-blocks/image', 'ctx-blocks/nav', 'ctx-blocks/posts', 'ctx-blocks/grid-row', 'ctx-blocks/description-list', 'ctx-blocks/accordion-collection', 'ctx-blocks/modal', 'ctx-blocks/progress']

export default function Edit({...props}) {

		const {
			attributes: {
				imagePosition,
				textAlign,
				isFirst,
				isLast,
				imageWidth,
				hover,
				image
			},
			backgroundColor,
		} = props;

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
			color: props.colorUtils.getMostReadableColor(backgroundColor.color, ['#ffffff', '#000000'])
		};

		var classes = [
			"ctx-card",
			isFirst ? "ctx-is-first" : false,
			isLast ? "ctx-is-last" : false,
			hover ? "ctx-hover" : false,
			`text-${textAlign}`,
			`image-${imagePosition}`
		].filter(Boolean).join(" ");

		var imageSide = ( imagePosition == "left" || imagePosition == "right");
		var isSVG = ( image != null ? image.subtype == "svg+xml" : false );
		
		return (
			<>
				<Inspector
						{ ...props }
				/>
				<Toolbar
					{ ...props }
				/>
				<div {...useBlockProps() } >
					<div className="ctx-grabber">
						<label>{__('Card', 'ctx-blocks')}</label>
					</div>
					<div style={style} className={classes}>
						
						{ image && imageSide && !isSVG &&
							<div className="image-side"
								style={{
									backgroundImage: `url(${image.sizes.large.url})`,
									width: `${imageWidth}%`
								}}
							>

							</div>
						}
						{ image && !imageSide && !isSVG &&
							<img 
							width={`${imageWidth}%`} 
							src={image.sizes.large.url} alt={image.filename}/>
						}
						{ isSVG && 
							<img 
							width={`${imageWidth}%`} 
							src={image.url} alt={image.filename}/>
						}
						<div className="content">
							<InnerBlocks 
								allowedBlocks={ALLOWED_BLOCKS}
								template={TEMPLATE}
							/>
						</div>
						
					</div>
				</div>
			</>
		);

}