import {
	InspectorControls,
	PanelColorSettings,
	URLInput,
} from '@wordpress/block-editor';
import {
	BaseControl,
	Button,
	FocalPointPicker,
	Icon,
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons.js';

import { mediaPosition } from '../../common/utils/mediaPosition.js';

const Inspector = ( props ) => {
	const {
		attributes: {
			imagePosition,
			hover,
			transparent,
			url,
			imageUrl,
			label,
			shadow,
			badge,
			focalPoint,
			customSecondaryColor,
		},
		setAttributes,
		imageRef,
		backgroundColor,
		setBackgroundColor,
		secondaryColor,
		setSecondaryColor,
	} = props;

	const imperativeFocalPointPreview = ( value ) => {
		const [ styleOfRef, property ] = imageRef.current
			? [ imageRef.current.style, 'objectPosition' ]
			: [ imageRef.current.style, 'backgroundPosition' ];
		styleOfRef[ property ] = mediaPosition( value );
	};

	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={ __( 'Color settings', 'ctx-blocks' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							label: __( 'Background color', 'ctx-blocks' ),
							onChange: setBackgroundColor,
							value: backgroundColor.color,
							disableCustomColors: false,
							defaultPalette: false,
							enableAlpha: true,
						},
						{
							label: __( 'Secondary color', 'ctx-blocks' ),
							onChange: setSecondaryColor,
							value: secondaryColor.color,
							disableCustomColors: false,
							defaultPalette: false,
						},
					] }
				/>
			</InspectorControls>
			<InspectorControls>
				<PanelBody
					title={ __( 'Appearance', 'ctx-blocks' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __( 'Shadow', 'ctx-blocks' ) }
						checked={ shadow }
						onChange={ ( value ) => {
							setAttributes( { shadow: value } );
						} }
					/>

					<TextControl
						label={ __( 'Label', 'ctx-blocks' ) }
						value={ label }
						onChange={ ( value ) => {
							setAttributes( { label: value } );
						} }
						help={ __(
							'Adds a floating label for e.g. a category',
							'ctx-blocks'
						) }
					/>
					<TextControl
						label={ __( 'Badge', 'ctx-blocks' ) }
						value={ badge }
						onChange={ ( value ) => {
							setAttributes( { badge: value } );
						} }
						help={ __(
							'Draw attention to this card or add a counter with a badge in the edge',
							'ctx-blocks'
						) }
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Image', 'ctx-blocks' ) }
					initialOpen={ false }
				>
					<FocalPointPicker
						__nextHasNoMarginBottom
						label={ __( 'Focal point picker' ) }
						url={ imageUrl }
						value={ focalPoint }
						onDragStart={ imperativeFocalPointPreview }
						onDrag={ imperativeFocalPointPreview }
						onChange={ ( newFocalPoint ) =>
							setAttributes( {
								focalPoint: newFocalPoint,
							} )
						}
					/>
					<PanelRow>
						<div>
							<label
								className="components-base-control__label"
								htmlFor="inspector-range-control-4"
							>
								{ __( 'Image position', 'ctx-blocks' ) }
							</label>
							<div className="imagePositionSelector">
								<Button
									onClick={ () =>
										setAttributes( {
											imagePosition: 'top',
										} )
									}
									className={
										imagePosition == 'top' ? 'active' : ''
									}
								>
									<Icon
										size="64"
										className="icon"
										icon={ icons.topimage }
									/>
									<div>{ __( 'top', 'ctx-blocks' ) }</div>
								</Button>
								<Button
									onClick={ () =>
										setAttributes( {
											imagePosition: 'bottom',
										} )
									}
									className={
										imagePosition == 'bottom'
											? 'active'
											: ''
									}
								>
									<Icon
										size="64"
										className="icon"
										icon={ icons.bottomimage }
									/>
									<div>{ __( 'bottom', 'ctx-blocks' ) }</div>
								</Button>
								<Button
									onClick={ () =>
										setAttributes( {
											imagePosition: 'left',
										} )
									}
									className={
										imagePosition == 'left' ? 'active' : ''
									}
								>
									<Icon
										size="64"
										className="icon"
										icon={ icons.leftimage }
									/>
									<div>{ __( 'left', 'ctx-blocks' ) }</div>
								</Button>
								<Button
									onClick={ () =>
										setAttributes( {
											imagePosition: 'right',
										} )
									}
									className={
										imagePosition == 'right' ? 'active' : ''
									}
								>
									<Icon
										size="64"
										className="icon"
										icon={ icons.rightimage }
									/>
									<div>{ __( 'right', 'ctx-blocks' ) }</div>
								</Button>
							</div>
						</div>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={ __( 'Behaviour', 'ctx-blocks' ) }
					initialOpen={ false }
				>
					<BaseControl label={ __( 'Link', 'ctx-blocks' ) }>
						<URLInput
							value={ url }
							onChange={ ( url, post ) =>
								setAttributes( {
									url,
									text:
										( post && post.title ) ||
										__( 'Click here...', 'ctx-blocks' ),
								} )
							}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
