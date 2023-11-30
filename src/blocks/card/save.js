import {
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { colord } from 'colord';

const CardSave = (props) => {
	const { attributes } = props;
	const {
		labelText,
		badgeText,
		hover,
		imageId,
		imageUrl,
		shadow,
		url,
		openInNewTab,
		accentColor,
		customAccentColor,
		layout,
	} = attributes;

	const classes = [
		'ctx__card',
		layout?.orientation === 'horizontal'
			? 'ctx__card-horizontal'
			: 'ctx__card-vertical',
		url || hover ? 'ctx__card-hover' : false,
		shadow ? 'ctx__card-shadow' : false,
		imageId ? '' : 'ctx__card-no-image',
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
		background: customAccentColor,
		color: colord(customAccentColor).isDark() ? '#ffffff' : '#000000',
	};

	const accentClass = getColorClassName('background-color', accentColor);

	const cardStyle = {
		...blockProps.style,
		padding: '0 !important',
		gap:
			attributes.style?.spacing?.blockGap
				?.replaceAll('|', '--')
				.replace(':', '(--wp--') + ')' ?? undefined,
	};

	const innerBlockProps = useInnerBlocksProps.save({
		className: 'ctx__card-content',
		style: contentStyle,
	});

	const Tag = url ? 'a' : 'div';

	return (
		<Tag
			{...blockProps}
			style={cardStyle}
			href={url ? url : undefined}
			target={openInNewTab ? '_blank' : undefined}
		>
			<div className="ctx__card-header">
				{!!badgeText && (
					<b
						className={`ctx__card-badge ${accentClass}`}
						style={accentStyle}
					>
						{badgeText}
					</b>
				)}
				{imageUrl && <img src={imageUrl ?? ''} />}
				{!!labelText && (
					<label
						className={`ctx__card-label ${accentClass}`}
						style={accentStyle}
					>
						{labelText}
					</label>
				)}
			</div>
			<div {...innerBlockProps} />
		</Tag>
	);
};

export default CardSave;
