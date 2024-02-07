/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
import {
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

export default function Save(props) {
	const {
		attributes: {
			imageUrl,
			icon,
			url,
			urlIcon,
			iconColor,
			customIconColor,
			iconBackgroundColor,
			customIconBackgroundColor,
			backgroundColor,
			textColor,
		},
		className,
	} = props;

	const classes = [className, 'ctx__description-item']
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({
		className: classes,
	});

	const borderProps = getBorderClassesAndStyles(props.attributes);

	const imageStyle = {
		...borderProps.style,
		...blockProps.style,
		color: iconColor?.color ?? customIconColor ?? 'none',
		backgroundColor:
			iconBackgroundColor?.color ?? customIconBackgroundColor ?? 'none',
	};

	const imageClasses = [
		borderProps.classes,
		'ctx__description-item-image',
		icon === 'label' && !imageUrl && 'ctx__description-item-image-bullet',
		getColorClassName('color', iconColor),
		getColorClassName('background-color', iconBackgroundColor),
	].join(' ');

	const innerBlocksProps = useInnerBlocksProps.save();

	return (
		<li {...blockProps}>
			<div className={imageClasses} style={imageStyle}>
				{imageUrl && <img src={imageUrl} />}

				{!imageUrl && (
					<i className="material-icons material-symbols-outlined">
						{icon}
					</i>
				)}
			</div>

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
					{urlIcon && (
						<i className="material-icons material-symbols-outlined">
							{urlIcon}
						</i>
					)}
				</a>
			)}
		</li>
	);
}
