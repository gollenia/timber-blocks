/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function Save({ ...props }) {
	const {
		attributes: {
			text,
			contentType,
			image,
			icon,
			roundImage,
			styleVariation,
			title,
			url,
			urlIcon,
			iconColor,
			customIconColor,
			iconBackgroundColor,
			customIconBackgroundColor,
		},
		setAttributes,

		className,
	} = props;

	const classes = [className, 'ctx__description-item']
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({
		className: classes,
	});

	const iconStyle = {
		color: iconColor?.color ?? customIconColor ?? 'none',
		backgroundColor:
			iconBackgroundColor?.color ?? customIconBackgroundColor ?? 'none',
		borderRadius: roundImage ? '50%' : '0',
	};

	const iconClasses = [
		styleVariation === 'icon' && 'ctx__description-item__icon',
		styleVariation === 'bullet' && 'ctx__description-item__bullet',
		getColorClassName('color', iconColor),
		getColorClassName('background-color', iconBackgroundColor),
	].join(' ');

	console.log(props.attributes);

	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<div {...blockProps}>
			{styleVariation === 'image' && image && (
				<img
					style={iconStyle}
					src={image?.sizes?.thumbnail?.url}
					alt={title}
				/>
			)}
			{styleVariation === 'icon' && icon && (
				<div style={iconStyle} className={iconClasses}>
					<i className="material-icons">{icon}</i>
				</div>
			)}
			{styleVariation === 'bullet' && (
				<div className={iconClasses} style={iconStyle}>
					<i className="material-icons">{icon ? icon : 'label'}</i>
				</div>
			)}

			<div
				{...innerBlocksProps}
				className="ctx__description-item__content"
			></div>

			{url && (
				<a
					className="ctx__description-item__link"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{urlIcon && <i className="material-icons">{urlIcon}</i>}
				</a>
			)}
		</div>
	);
}
