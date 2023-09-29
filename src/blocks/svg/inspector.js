/**
 * WordPress dependencies
 */
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Inspector controls
 */
const Inspector = ( props ) => {
	const {
		attributes: {
			width,
			height,
			url,
			id,

			linkTo,
			link,
			strokeWidth,
		},
		setAttributes,
		setStrokeColor,
		setFillColor,
		strokeColor,
		fillColor,
	} = props;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Image Size', 'ctx-blocks' ) }
				initialOpen={ true }
			>
				<NumberControl
					label={ __( 'Width', 'ctx-blocks' ) }
					value={ width }
					onChange={ ( value ) =>
						setAttributes( { width: parseInt( value ) } )
					}
					min={ 16 }
				/>
				<NumberControl
					label={ __( 'Height', 'ctx-blocks' ) }
					value={ height }
					onChange={ ( value ) =>
						setAttributes( { height: parseInt( value ) } )
					}
					min={ 16 }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Image Manipulation', 'ctx-blocks' ) }
				initialOpen={ false }
			>
				<NumberControl
					label={ __( 'Stroke Width', 'ctx-blocks' ) }
					value={ strokeWidth }
					onChange={ ( value ) =>
						setAttributes( { strokeWidth: parseInt( value ) } )
					}
					min={ 0 }
				/>
			</PanelBody>
			<PanelColorSettings
				title={ __( 'Color settings', 'ctx-blocks' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						label: __( 'Stroke color', 'ctx-blocks' ),
						onChange: setStrokeColor,
						value: strokeColor.color,
						disableCustomColors: false,
						defaultPalette: false,
						enableAlpha: false,
					},
					{
						label: __( 'Fill color', 'ctx-blocks' ),
						onChange: setFillColor,
						value: fillColor.color,
						disableCustomColors: false,
						defaultPalette: false,
					},
				] }
			/>
		</InspectorControls>
	);
};

export default Inspector;
