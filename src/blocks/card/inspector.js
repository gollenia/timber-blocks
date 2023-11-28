import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	CheckboxControl,
	FocalPointPicker,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { mediaPosition } from './mediaPosition.js';

const Inspector = (props) => {
	const {
		attributes: { url, imageUrl, shadow, focalPoint, labelText, badgeText },
		setAttributes,
		imageRef,
		backgroundColor,
		setBackgroundColor,
		secondaryColor,
		setSecondaryColor,
	} = props;

	const imperativeFocalPointPreview = (value) => {
		const [styleOfRef, property] = imageRef.current
			? [imageRef.current.style, 'objectPosition']
			: [imageRef.current.style, 'backgroundPosition'];
		styleOfRef[property] = mediaPosition(value);
	};

	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={__('Color settings', 'ctx-blocks')}
					initialOpen={false}
					colorSettings={[
						{
							label: __('Background color', 'ctx-blocks'),
							onChange: setBackgroundColor,
							value: backgroundColor.color,
							disableCustomColors: false,
							defaultPalette: false,
							enableAlpha: true,
						},
						{
							label: __('Secondary color', 'ctx-blocks'),
							onChange: setSecondaryColor,
							value: secondaryColor.color,
							disableCustomColors: false,
							defaultPalette: false,
						},
					]}
				/>
			</InspectorControls>
			<InspectorControls>
				<PanelBody
					title={__('Appearance', 'ctx-blocks')}
					initialOpen={false}
				>
					<CheckboxControl
						label={__('Shadow', 'ctx-blocks')}
						checked={shadow}
						onChange={(value) => {
							setAttributes({ shadow: value });
						}}
					/>

					<TextControl
						label={__('Label Text', 'ctx-blocks')}
						value={labelText}
						onChange={(value) => {
							setAttributes({ labelText: value });
						}}
					/>

					<TextControl
						label={__('Badge Text', 'ctx-blocks')}
						value={badgeText}
						onChange={(value) => {
							setAttributes({ badgeText: value });
						}}
					/>
				</PanelBody>

				<PanelBody
					title={__('Image', 'ctx-blocks')}
					initialOpen={false}
				>
					<FocalPointPicker
						__nextHasNoMarginBottom
						label={__('Focal point picker')}
						url={imageUrl}
						value={focalPoint}
						onDragStart={imperativeFocalPointPreview}
						onDrag={imperativeFocalPointPreview}
						onChange={(newFocalPoint) =>
							setAttributes({
								focalPoint: newFocalPoint,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
