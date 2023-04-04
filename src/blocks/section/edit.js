import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function Edit( { ...props } ) {
	const template = [ [ 'core/paragraph' ] ];

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'ctx:section__container' },
		{ template, renderAppender: false }
	);

	const {
		attributes: {
			imagePosition,
			parallaxEffect,
			paddingTop,
			paddingBottom,
			textAlignment,
			backgroundImage,
			fromDate,
			toDate,
			customBackgroundColor,
		},
		className,
		backgroundColor,
	} = props;

	const isHidden = () => {
		if ( ! fromDate && ! toDate ) return false;
		if ( fromDate && ! toDate && new Date( fromDate ) > new Date() )
			return true;
		if ( ! fromDate && toDate && new Date( toDate ) < new Date() )
			return true;
		if (
			fromDate &&
			toDate &&
			( new Date( fromDate ) > new Date() ||
				new Date( toDate ) < new Date() )
		)
			return true;
	};

	const isVisible = () => {
		if ( ! fromDate && ! toDate ) return false;
		if ( fromDate && ! toDate && new Date( fromDate ) <= new Date() )
			return true;
		if ( ! fromDate && toDate && new Date( toDate ) >= new Date() )
			return true;
		if (
			fromDate &&
			toDate &&
			new Date( fromDate ) <= new Date() &&
			new Date( toDate ) >= new Date()
		)
			return true;
	};

	const textColor = () => {
		if ( backgroundColor.color == '' && customBackgroundColor == '' )
			return '#000000';
		return colord( backgroundColor.color ).isLight()
			? '#000000'
			: '#ffffff';
	};

	const style = {
		background: backgroundColor.color ?? customBackgroundColor,
		backgroundSize: 'cover',
		backgroundPosition: imagePosition,
		backgroundImage: backgroundImage
			? 'url(' + backgroundImage.sizes.large.url + ')'
			: 'none',
		color: textColor(),
		paddingTop: `${ paddingTop }0px`,
		paddingBottom: `${ paddingBottom }0px`,
	};

	const classes = [
		'ctx-section',
		'alignwide',
		parallaxEffect ? 'parallax' : false,
		className || false,
		`ctx-text-align-${ textAlignment }`,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes, style: style } );

	return (
		<div>
			<Inspector { ...props } />
			<Toolbar { ...props } />

			<div { ...blockProps }>
				{ ! isHidden() && ! isVisible() && (
					<span className="ctx:control__label section__label">
						{ __( 'Switch to Group or Cover block', 'ctx-blocks' ) }
					</span>
				) }
				{ isHidden() && (
					<span className="ctx:control__label section__label ctx:control__label--error">
						{ __( 'Switch to Group or Cover block', 'ctx-blocks' ) +
							' (' +
							__( 'Hidden', 'ctx-blocks' ) +
							')' }
					</span>
				) }
				{ isVisible() && (
					<span className="ctx:control__label section__label ctx:control__label--success">
						{ __( 'Section', 'ctx-blocks' ) +
							' (' +
							__( 'Visible', 'ctx-blocks' ) +
							')' }
					</span>
				) }
				<div { ...innerBlocksProps }></div>
			</div>
		</div>
	);
}
