/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
	withColors,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

function ItemEdit({ ...props }) {
	const {
		attributes: { image, icon, styleVariation, url, urlIcon },
		iconColor,
		customIconColor,
		customIconBackgroundColor,
		iconBackgroundColor,
		className,
	} = props;

	const classes = [className, 'ctx__description-item']
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps({
		className: classes,
	});

	const iconStyle = {
		color: iconColor?.color ?? customIconColor ?? 'none',
		backgroundColor:
			iconBackgroundColor?.color ?? customIconBackgroundColor ?? 'none',
	};

	const iconClasses = [
		styleVariation === 'icon' && 'ctx__description-item-icon',
		styleVariation === 'bullet' && 'ctx__description-item-bullet',
		getColorClassName('color', iconColor),
		getColorClassName('background-color', iconBackgroundColor),
	].join(' ');

	const TEMPLATE = [
		[
			'core/heading',
			{
				placeholder: 'Title',
				level: 4,
				className: 'title',
				style: { spacing: { margin: { top: '0px', bottom: '0px' } } },
			},
		],
		['core/paragraph', { placeholder: 'Description' }],
	];
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'ctx__description-item-content' },
		{
			template: TEMPLATE,
			allowedBlocks: ['core/paragraph', 'core/heading'],
		}
	);

	return (
		<>
			<div {...blockProps}>
				<Inspector {...props} />

				{styleVariation == 'image' &&
					image &&
					image.subtype != 'svg+xml' && (
						<img
							className="ctx__description-item-image"
							src={image.sizes.thumbnail.url}
							style={iconStyle}
						/>
					)}

				{styleVariation == 'icon' && (
					<div className={iconClasses} style={iconStyle}>
						<i className="material-icons">{icon}</i>
					</div>
				)}

				{styleVariation == 'bullet' && (
					<div className={iconClasses} style={iconStyle}>
						<i className="material-icons">
							{icon ? icon : 'label'}
						</i>
					</div>
				)}

				<div
					className="ctx__description-item__content"
					{...innerBlockProps}
				></div>
				{url && (
					<div class="ctx__description-item__action">
						<b>
							<i class="material-icons">{urlIcon}</i>
						</b>
					</div>
				)}
			</div>
		</>
	);
}

export default compose([
	withColors({
		iconColor: 'icon-color',
		iconBackgroundColor: 'background-color',
	}),
])(ItemEdit);
