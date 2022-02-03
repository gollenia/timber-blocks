import Inspector from './inspector';
import Toolbar from './toolbar';
import { has } from 'lodash';
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/spacer', 'core/paragraph', 'core/shortcode', 'core/heading', 'core/list', 'ctx-blocks/button-group', 'ctx-blocks/button',  'ctx-blocks/image', 'ctx-blocks/nav', 'ctx-blocks/posts', 'ctx-blocks/grid-row', 'ctx-blocks/description-list', 'ctx-blocks/accordion-collection', 'ctx-blocks/modal', 'ctx-blocks/progress']

export default function CardEdit({...props}) {

		const {
			attributes: {
				imagePosition,
				textAlign,
				isFirst,
				isLast,
                label,
                badge,
				imageWidth,
				hover,
				image
			},
			backgroundColor,
            secondaryColor
		} = props;

		const TEMPLATE = [
			[
				'core/heading', 
				{
					placeholder: __('Title', 'ctx-blocks'),
					className: 'card__title',
					level: 2
				}
			],
			[
				'core/heading', 
				{
					placeholder: __('Title', 'ctx-blocks'),
					className: 'card__subtitle',
					level: 4
				}
			],
			[
				'core/paragraph',
				{
					placeholder: __('Your content goes here...', 'ctx-blocks'),
					className: 'card__text'
				}
			]
		];
	
		const style = {
			background: backgroundColor.color, 
			color: props.colorUtils.getMostReadableColor(backgroundColor.color, ['#ffffff', '#000000'])
		};

        const secondaryStyle = {
			background: secondaryColor.color, 
			color: props.colorUtils.getMostReadableColor(secondaryColor.color, ['#ffffff', '#000000'])
		};

		const classes = [
			"ctx-card",
			isFirst ? "ctx-is-first" : false,
			isLast ? "ctx-is-last" : false,
			hover ? "ctx-hover" : false,
			`text-${textAlign}`,
			`image-${imagePosition}`
		].filter(Boolean).join(" ");
		
		const isSVG = ( image != null ? image.subtype == "svg+xml" : false );
        const imageUrl = image == null ? false : (!(has(image, 'sizes.medium')) || isSVG ? image.url : image.sizes.medium.url);
		
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
                        { badge != "" && <b className="badge" style={secondaryStyle}><b>{badge}</b></b> }
						{ imageUrl && <img 
							width={`${imageWidth}%`} 
							src={imageUrl} alt={image.filename}
                        /> }
                        <div className="card-content">
                            { label != "" && <label style={secondaryStyle}>{label}</label> }
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