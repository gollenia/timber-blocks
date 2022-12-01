import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';
import Inspector from './inspector';
import Toolbar from './toolbar';

import CardImage from './cardImage';
import icons from './icons';

export default function CardEdit( { ...props } ) {
	const {
		attributes: {
			imagePosition,
			textAlign,
			isFirst,
			isLast,
			label,
			badge,
			hover,
			image,
			url,
			customBackgroundColor,
			customSecondaryColor,
		},

		backgroundColor,
		secondaryColor,
	} = props;

	const allowedBlocks = [
		'core/spacer',
		'core/separator',
		'core/paragraph',
		'core/shortcode',
		'core/heading',
		'core/list',
		'ctx-blocks/button-group',
		'ctx-blocks/button',
		'ctx-blocks/image',
		'ctx-blocks/nav',
		'ctx-blocks/posts',
		'ctx-blocks/grid-row',
		'ctx-blocks/description-list',
		'ctx-blocks/accordion-collection',
		'ctx-blocks/progress',
		'events-manager/details',
		'events-manager/booking',
	];

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

	console.log( {
		bc: backgroundColor,
		cc: customBackgroundColor,
	} );

	const getSecondaryStyle = () => {
		let bgValue = 'var(--primary)';
		let fbValue = 'var(--primary-contrast)';
		ifcustomSecondaryColor ?? backgroundColor.color
	}

	const backgroundColorValue = customBackgroundColor
		? customBackgroundColor
		: backgroundColor.color ?? '#ffffff';

	const secondaryColorValue = customSecondaryColor
		? customSecondaryColor
		: secondaryColor.color ?? 'var(--primary)';

	const style = {
		background: backgroundColorValue,
		color: colord( backgroundColorValue ).isDark() ? '#ffffff' : '#000000',
	};

	const secondaryStyle = {
		background: secondaryColorValue,
		color: colord( secondaryColorValue ).isDark() ? '#ffffff' : '#000000',
	};

	const innerBlockProps = useInnerBlocksProps(
		{},
		{ allowedBlocks, template }
	);

	const classes = [
		'ctx:card',
		isFirst ? 'ctx:card__first' : false,
		isLast ? 'ctx:card__last' : false,
		hover ? 'ctx:card__hover' : false,
		`ctx:card--${ textAlign }`,
		`ctx:card__image--${ imagePosition }`,
	]
		.filter( Boolean )
		.join( ' ' );

	console.log( icons );
	console.log( customBackgroundColor );
	return (
		<>
			<Inspector { ...props } />
			<Toolbar { ...props } />
			<div { ...useBlockProps() }>
				<div className="ctx:control__label ctx:card__label">
					<label>{ __( 'Card', 'ctx-blocks' ) }</label>
					<div className="ctx:control__icons">
						{ url != '' && (
							<Icon
								className="ctx:control__icon"
								icon={ icons?.url }
								size={ 18 }
							/>
						) }
					</div>
				</div>
				<div style={ style } className={ classes }>
					{ badge != '' && (
						<b className="ctx:card__badge" style={ secondaryStyle }>
							<b>{ badge }</b>
						</b>
					) }
					<CardImage
						image={ image }
						failMessage={ __(
							'Image is too small. Please upload a larger version'
						) }
					/>
					<div className="ctx:card__content">
						{ label != '' && (
							<label style={ secondaryStyle }>{ label }</label>
						) }
						<div { ...innerBlockProps }></div>
					</div>
				</div>
			</div>
		</>
	);
}
