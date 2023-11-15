import {
	RichText,
	getColorClassName,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function CardEdit({ ...props }) {
	const {
		attributes: {
			imagePosition,
			textAlign,
			hover,
			imageId,
			imageUrl,
			shadow,
			url,
			badgeText,
			labelText,
			hasBadge,
			hasLabel,
			customBackgroundColor,
			customSecondaryColor,
		},
		backgroundColor,
		secondaryColor,
		setAttributes,
		__unstableLayoutClassNames: layoutClassNames,
	} = props;

	console.log('edit', props);

	const allowedBlocks = [
		'core/spacer',
		'core/separator',
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/group',
		'ctx-blocks/progress',
		'events-manager/details',
		'events-manager/booking',
		!url ? 'ctx-blocks/button' : false,
	];

	const imageRef = useRef();

	const onSelectMedia = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageUrl: undefined, imageId: undefined });
			return;
		}
		setAttributes({
			imageUrl: media.sizes?.large?.url ?? media.url,
			imageId: media.id,
		});
	};

	const template = [
		[
			'core/heading',
			{
				placeholder: __('Title', 'ctx-blocks'),
				className: 'card__title',
				level: 2,
			},
		],
		[
			'core/heading',
			{
				placeholder: __('Subtitle', 'ctx-blocks'),
				className: 'card__subtitle',
				level: 4,
			},
		],
		[
			'core/paragraph',
			{
				placeholder: __('Your content goes here...', 'ctx-blocks'),
				className: 'card__text',
			},
		],
	];
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const secondaryColorClass = getColorClassName(
		'background-color',
		secondaryColor
	);

	const backgroundColorValue = customBackgroundColor
		? customBackgroundColor
		: backgroundColor.color ?? '';

	const secondaryColorValue = customSecondaryColor
		? customSecondaryColor
		: secondaryColor.color ?? 'var(--primary)';

	const secondaryStyle = {
		background: secondaryColorValue,
		color: colord(secondaryColorValue).isDark() ? '#ffffff' : '#000000',
	};

	const innerBlockProps = useInnerBlocksProps(
		{},
		{ allowedBlocks, template }
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

	const blockProps = useBlockProps({ className: classes });

	const cardStyle = {
		...blockProps.style,
		backgroundColor: backgroundColorValue,
		padding: '0 !important',
	};

	const contentStyle = {
		paddingTop: blockProps.style?.paddingTop ?? '1rem',
		paddingBottom: blockProps.style?.paddingBottom ?? '1rem',
		paddingLeft: blockProps.style?.paddingLeft ?? '1rem',
		paddingRight: blockProps.style?.paddingRight ?? '1rem',
	};

	return (
		<>
			<Inspector {...props} imageRef={imageRef} />
			<Toolbar {...props} onSelectMedia={onSelectMedia} />
			<div {...blockProps} style={cardStyle}>
				{!!hasBadge && (
					<RichText
						tagName="p"
						className={`ctx-card-badge ${secondaryColorClass}`}
						placeholder={__('Badge', 'ctx-blocks')}
						value={badgeText}
						onChange={(value) =>
							setAttributes({ badgeText: value })
						}
						style={secondaryStyle}
					/>
				)}
				{imageUrl && <img ref={imageRef} src={imageUrl ?? ''} />}
				<div className="ctx-card-content" style={contentStyle}>
					{!!hasLabel && (
						<RichText
							className={`ctx-card-label ${secondaryColorClass}`}
							tagName="label"
							placeholder={__('Label', 'ctx-blocks')}
							value={labelText}
							onChange={(value) =>
								setAttributes({ labelText: value })
							}
							style={secondaryStyle}
						/>
					)}
					<div {...innerBlockProps}></div>
				</div>
			</div>
		</>
	);
}
