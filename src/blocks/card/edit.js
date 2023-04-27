import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function CardEdit( { ...props } ) {
	const {
		attributes: {
			imagePosition,
			textAlign,
			label,
			badge,
			hover,
			imageId,
			imageUrl,
			shadow,
			url,
			style,
			className,
			customBackgroundColor,
			customSecondaryColor,
		},
		backgroundColor,
		secondaryColor,
		setAttributes,
		__unstableLayoutClassNames: layoutClassNames,
	} = props;

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
	];

	const imageRef = useRef();

	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { imageUrl: undefined, imageId: undefined } );
			return;
		}
		setAttributes( {
			imageUrl: media.sizes?.large?.url ?? media.url,
			imageId: media.id,
		} );
	};

	const template = [
		[
			'core/heading',
			{
				placeholder: __( 'Title', 'ctx-blocks' ),
				className: 'card__title',
				level: 2,
			},
		],
		[
			'core/heading',
			{
				placeholder: __( 'Subtitle', 'ctx-blocks' ),
				className: 'card__subtitle',
				level: 4,
			},
		],
		[
			'core/paragraph',
			{
				placeholder: __( 'Your content goes here...', 'ctx-blocks' ),
				className: 'card__text',
			},
		],
	];

	const backgroundColorValue = customBackgroundColor
		? customBackgroundColor
		: backgroundColor.color ?? '#ffffff';

	const secondaryColorValue = customSecondaryColor
		? customSecondaryColor
		: secondaryColor.color ?? 'var(--primary)';

	const secondaryStyle = {
		background: secondaryColorValue,
		color: colord( secondaryColorValue ).isDark() ? '#ffffff' : '#000000',
	};

	const innerBlockProps = useInnerBlocksProps(
		{},
		{ allowedBlocks, template }
	);

	const textColor = backgroundColor.color
		? colord( backgroundColor.color ).isDark()
			? 'white'
			: 'black'
		: 'black';

	const classes = [
		layoutClassNames,
		className,
		'ctx:card',
		backgroundColor.slug
			? `has-background has-${ backgroundColor.slug }-background-color`
			: false,
		'has-text-color',
		'has-' + textColor + '-text-color',
		url ? 'ctx:card--hover' : false,
		shadow ? 'ctx:card__shadow' : false,
		`ctx:card--${ textAlign }`,
		`ctx:card__image--${ imagePosition }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

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
			<Inspector { ...props } imageRef={ imageRef } />
			<Toolbar { ...props } onSelectMedia={ onSelectMedia } />
			<div { ...blockProps } style={ cardStyle }>
				{ !! badge && (
					<b className="ctx:card__badge" style={ secondaryStyle }>
						<b>{ badge }</b>
					</b>
				) }
				{ imageUrl && <img ref={ imageRef } src={ imageUrl ?? '' } /> }
				<div className="ctx:card__content" style={ contentStyle }>
					{ !! label && (
						<label style={ secondaryStyle }>{ label }</label>
					) }
					<div { ...innerBlockProps }></div>
				</div>
			</div>
		</>
	);
}
