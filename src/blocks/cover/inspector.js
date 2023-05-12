/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	PanelColorSettings,
	__experimentalUseGradient,
} from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	FocalPointPicker,
	Icon,
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { __experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients } from '@wordpress/block-editor';

import { mediaPosition } from './common';
import icons from './icons';

/**
 * Inspector controls
 */
const Inspector = ( props ) => {
	const {
		attributes,
		setAttributes,
		currentSettings,
		coverRef,
		setOverlayColor,
		clientId,
	} = props;

	const {
		hasParallax,
		useFeaturedImage,
		focalPoint,
		originalImageSize,
		overlayOpacity,
		coverSize,
	} = attributes;

	const {
		isImageBackground,
		mediaElement,
		hasBackground,
		url,
		isImgElement,
		overlayColor,
	} = currentSettings;

	const { gradientValue, setGradient } = __experimentalUseGradient();
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	const toggleParallax = () => {
		setAttributes( {
			hasParallax: ! hasParallax,
			...( ! hasParallax ? { focalPoint: undefined } : {} ),
		} );
	};

	const imperativeFocalPointPreview = ( value ) => {
		const [ styleOfRef, property ] = mediaElement.current
			? [ mediaElement.current.style, 'objectPosition' ]
			: [ coverRef.current.style, 'backgroundPosition' ];
		styleOfRef[ property ] = mediaPosition( value );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Background Image', 'ctx-blocks' ) }
					initialOpen={ true }
				>
					{ hasBackground ? (
						<>
							<CheckboxControl
								label={ __( 'Parallax-Effect', 'ctx-blocks' ) }
								disabled={ ! useFeaturedImage && ! url }
								onChange={ () => {
									toggleParallax();
								} }
								checked={ hasParallax }
							/>

							<FocalPointPicker
								__nextHasNoMarginBottom
								label={ __( 'Focal point picker' ) }
								url={ url }
								value={ focalPoint }
								onDragStart={ imperativeFocalPointPreview }
								onDrag={ imperativeFocalPointPreview }
								onChange={ ( newFocalPoint ) =>
									setAttributes( {
										focalPoint: newFocalPoint,
									} )
								}
							/>
						</>
					) : (
						<p>
							{ __(
								"You haven't selected an image yet.",
								'ctx-blocks'
							) }
						</p>
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Size', 'ctx-blocks' ) }
					initialOpen={ true }
				>
					<div className="ctx-style-selector">
						<Button
							onClick={ () =>
								setAttributes( { coverSize: 'original' } )
							}
							className={
								coverSize === 'original' ? 'active' : ''
							}
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.original }
							/>
							<div>{ __( 'Original', 'gutenberg-form' ) }</div>
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { coverSize: 'fixed' } )
							}
							className={ coverSize === 'fixed' ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.fixed }
							/>
							<div>{ __( 'Fixed', 'gutenberg-form' ) }</div>
						</Button>
						<Button
							onClick={ () =>
								setAttributes( { coverSize: 'pinch' } )
							}
							className={ coverSize === 'pinch' ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.pinch }
							/>
							<div>{ __( 'Manually', 'gutenberg-form' ) }</div>
						</Button>
					</div>
				</PanelBody>
			</InspectorControls>

			<InspectorControls group="styles">
				<PanelColorSettings
					title={ __( 'Color settings', 'ctx-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							label: __( 'Overlay color', 'ctx-blocks' ),
							onChange: setOverlayColor,
							value: overlayColor.color,
							disableCustomColors: false,
							defaultPalette: false,
							enableAlpha: true,
						},
					] }
				/>
				<PanelBody>
					<RangeControl
						label={ __( 'Overlay opacity', 'ctx-blocks' ) }
						value={ overlayOpacity }
						onChange={ ( value ) =>
							setAttributes( { overlayOpacity: value } )
						}
						min={ 0 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
