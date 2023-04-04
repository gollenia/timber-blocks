import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { store as coreStore, useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';
import classnames from 'classnames';
import ResizeBox from '../../common/components/ResizeBox';
import {
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	mediaPosition,
	POSITION_CLASSNAMES,
} from './common';
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function Edit( { ...props } ) {
	const template = [ [ 'core/paragraph' ] ];

	const {
		attributes,
		className,
		overlayColor,
		setOverlayColor,
		clientId,
		setAttributes,
		isSelected,
		toggleSelection,
		context: { postId, postType },
	} = props;

	const {
		imagePosition,
		hasParallax,
		useFeaturedImage,
		minHeight,
		minHeightUnit,
		contentPosition,
		overlayOpacity,
		focalPoint,
		originalImageSize,
	} = attributes;

	const mediaElement = useRef();

	const ref = useRef();

	const [ featuredImage ] = useEntityProp(
		'postType',
		postType,
		'featured_media',
		postId
	);

	const media = useSelect(
		( select ) =>
			featuredImage &&
			select( coreStore ).getMedia( featuredImage, { context: 'view' } ),
		[ featuredImage ]
	);
	const mediaUrl = media?.source_url;

	const url = useFeaturedImage
		? mediaUrl
		: // Ensure the url is not malformed due to sanitization through `wp_kses`.
		  attributes.url?.replaceAll( '&amp;', '&' );

	const backgroundType = useFeaturedImage
		? IMAGE_BACKGROUND_TYPE
		: attributes.backgroundType;

	const isImageBackground = IMAGE_BACKGROUND_TYPE === backgroundType;

	const currentSettings = {
		url,
		overlayColor,
		mediaElement,
		isImageBackground,
	};

	const onSelectMedia = attributesFromMedia( setAttributes, overlayOpacity );

	const toggleUseFeaturedImage = () => {
		setAttributes( {
			id: undefined,
			url: undefined,
			useFeaturedImage: ! useFeaturedImage,
			overlayOpacity: overlayOpacity === 100 ? 50 : overlayOpacity,
			backgroundType: useFeaturedImage
				? IMAGE_BACKGROUND_TYPE
				: undefined,
		} );
	};

	const style = {
		backgroundPosition: imagePosition,
		backgroundImage: url && hasParallax ? 'url(' + url + ')' : undefined,
		minHeight: minHeightUnit === 'px' ? minHeight + 'px' : minHeight + '%',
		backgroundSize: originalImageSize ? '100%' : 'cover',
	};

	const overlayStyle = {
		background: overlayColor.color,
	};

	const imageStyle = {
		objectPosition:
			focalPoint && ! hasParallax
				? mediaPosition( focalPoint )
				: undefined,
	};

	const innerBlocksClasses = classnames(
		'ctx:cover__inner',
		POSITION_CLASSNAMES[ contentPosition ]
	);

	const innerBlocksProps = useInnerBlocksProps(
		{ className: '' },
		{ template, renderAppender: false }
	);

	const imageClasses = classnames(
		'ctx:cover__image',
		hasParallax && 'ctx:cover__image--parallax',
		originalImageSize
			? 'ctx:cover__image--original'
			: 'ctx:cover__image--cover'
	);

	const classes = [
		'ctx:cover',
		'alignwide',
		hasParallax ? 'parallax' : false,
		className || false,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { ref }, { classes } );

	return (
		<>
			<Inspector
				{ ...props }
				currentSettings={ currentSettings }
				clientId={ clientId }
				coverRef={ ref }
			/>
			<Toolbar
				{ ...props }
				currentSettings={ currentSettings }
				onSelectMedia={ onSelectMedia }
				toggleUseFeaturedImage={ toggleUseFeaturedImage }
			/>

			<div
				{ ...blockProps }
				style={ { ...style, ...blockProps.style } }
				className={ classnames( classes, blockProps.className ) }
			>
				<ResizeBox
					className="block-library-cover__resize-container"
					onResizeStart={ () => {
						setAttributes( { minHeightUnit: 'px' } );
						toggleSelection( false );
					} }
					onResize={ ( value ) => {
						setAttributes( { minHeight: value } );
					} }
					onResizeStop={ ( newMinHeight ) => {
						toggleSelection( true );
						setAttributes( { minHeight: newMinHeight } );
					} }
					showHandle={ isSelected }
				/>
				<div
					className="ctx:cover__overlay"
					style={ overlayStyle }
				></div>
				{ url && ! hasParallax && (
					<img
						className={ imageClasses }
						ref={ mediaElement }
						src={ url }
						style={ imageStyle }
					/>
				) }
				<div className={ innerBlocksClasses }>
					<div { ...innerBlocksProps }></div>
				</div>
			</div>
		</>
	);
}
