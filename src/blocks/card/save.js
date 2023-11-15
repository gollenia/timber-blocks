import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { colord } from 'colord';

const CardSave = (props) => {
	const { attributes, children } = props;
	const {
		imagePosition,
		textAlign,
		labelText,
		badgeText,
		hasLabel,
		hasBadge,
		hover,
		imageId,
		imageUrl,
		shadow,
		url,
		backgroundColor,
		secondaryColor,
		customBackgroundColor,
		customSecondaryColor,
	} = attributes;

	console.log('SAVE', props);

	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const classes = [
		'ctx-card',
		backgroundColorClass,
		url || hover ? 'ctx-card-hover' : false,
		shadow ? 'ctx-card-shadow' : false,
		`ctx-card-${textAlign}`,
		`ctx-card-image-${imagePosition}`,
	]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({ className: classes });

	// Temporary hack until selectors work (see block.json)
	const contentStyle = {
		paddingTop: blockProps.style?.paddingTop ?? '1rem',
		paddingBottom: blockProps.style?.paddingBottom ?? '1rem',
		paddingLeft: blockProps.style?.paddingLeft ?? '1rem',
		paddingRight: blockProps.style?.paddingRight ?? '1rem',
	};

	const accentStyle = {
		background: customSecondaryColor,
		color: colord(customSecondaryColor).isDark() ? '#ffffff' : '#000000',
	};

	const accentClass = getColorClassName('background-color', secondaryColor);

	const cardStyle = {
		...blockProps.style,
		backgroundColor: !backgroundColorClass
			? customBackgroundColor
			: undefined,
		padding: '0 !important',
	};

	const Tag = url ? 'a' : 'div';

	return (
		<Tag {...blockProps} style={cardStyle} href={url ? url : undefined}>
			{hasBadge && !!badgeText && (
				<b
					className={`ctx-card-badge ${accentClass}`}
					style={accentStyle}
				>
					{badgeText}
				</b>
			)}
			{imageUrl && (
				<div className="ctx-card-image">
					<img src={imageUrl ?? ''} />
				</div>
			)}
			<div className="ctx-card-content" style={contentStyle}>
				{hasLabel && !!labelText && (
					<label
						className={`ctx-card-label ${accentClass}`}
						style={accentStyle}
					>
						{labelText}
					</label>
				)}
				<div
					{...useInnerBlocksProps.save({
						className: 'wp-block-card__inner-container',
					})}
				/>
			</div>
		</Tag>
	);
};

export default CardSave;
