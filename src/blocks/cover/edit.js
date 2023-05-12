import {
	store as blockEditorStore,
	useBlockProps,
	useInnerBlocksProps,
	withColors,
} from '@wordpress/block-editor';

import { compose } from '@wordpress/compose';
import { store as coreStore, useEntityProp } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';
import { store as noticesStore } from '@wordpress/notices';
import classnames from 'classnames';
import ResizeBox from '../../common/components/ResizeBox';
import {
	IMAGE_BACKGROUND_TYPE,
	POSITION_CLASSNAMES,
	attributesFromMedia,
	mediaPosition,
} from './common';
import Inspector from './inspector';
import CoverPlaceholder from './placeholder';
import Toolbar from './toolbar';

const CoverEdit = ( { ...props } ) => {
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
		coverSize,
		aspectRatio,
	} = attributes;

	const mediaElement = useRef();

	const ref = useRef();

	const [ featuredImage ] = useEntityProp(
		'postType',
		postType,
		'featured_media',
		postId
	);

	const { createErrorNotice } = useDispatch( noticesStore );

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

	const hasInnerBlocks = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock( clientId ).innerBlocks.length >
			0,
		[ clientId ]
	);

	const hasBackground = !! ( url || overlayColor.color );

	const currentSettings = {
		url,
		overlayColor,
		mediaElement,
		isImageBackground,
		hasBackground,
	};

	const onSelectMedia = attributesFromMedia( setAttributes, overlayOpacity );

	const onUploadError = ( message ) => {
		createErrorNotice( message, { type: 'snackbar' } );
	};

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
	};

	const overlayStyle = {
		background: overlayColor.color,
		opacity: overlayOpacity / 100,
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
		hasParallax && coverSize !== 'original' && 'ctx:cover__image--parallax'
	);

	const classes = [
		'ctx:cover',
		'alignwide',
		coverSize === 'fixed' && 'ctx:cover--fixed',
		coverSize === 'pinch' && 'ctx:cover--pinch',
		coverSize === 'original' && 'ctx:cover--cover',
		hasParallax ? 'parallax' : false,
		className || false,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { ref }, { classes } );

	console.log( 'coverSize', coverSize );

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
				{ ! hasInnerBlocks && ( ! url || ! isImageBackground ) ? (
					<CoverPlaceholder
						onSelectMedia={ onSelectMedia }
						onError={ onUploadError }
						toggleUseFeaturedImage={ toggleUseFeaturedImage }
					></CoverPlaceholder>
				) : (
					<>
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
							enable={ {
								top: false,
								right: false,
								bottom: coverSize === 'pinch',
								left: false,
							} }
						/>

						{ url &&
							! ( coverSize !== 'original' && hasParallax ) && (
								<img
									className={ imageClasses }
									ref={ mediaElement }
									src={ url }
									style={ imageStyle }
								/>
							) }
						<div
							className="ctx:cover__overlay"
							style={ overlayStyle }
						></div>
						<div className={ innerBlocksClasses }>
							<div { ...innerBlocksProps }></div>
						</div>
					</>
				) }
			</div>
		</>
	);
};

export default compose( [
	withColors( { overlayColor: 'background-color' } ),
] )( CoverEdit );
