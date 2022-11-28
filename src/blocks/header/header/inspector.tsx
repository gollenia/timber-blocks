/**
 * WordPress dependencies
 */
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

type Props = {
	attributes: {
		paragraphOrientation: 'top' | 'center' | 'bottom';
		mobileParagraphPosition: 'bottom' | 'top' | 'within';
		showBreadcrumbs: boolean;
		margin: boolean;
	};
	setAttributes: ( {} ) => {};
	backgroundColor: any;
	setBackgroundColor: ( color: string ) => {};
};

/**
 * Inspector controls
 */
const Inspector = ( props: Props ) => {
	const {
		attributes: {
			paragraphOrientation,
			mobileParagraphPosition,
			showBreadcrumbs,
			margin,
		},
		setAttributes,
		backgroundColor,
		setBackgroundColor,
	} = props;

	return (
		<InspectorControls>
			<PanelColorSettings
				colorSettings={ [
					{
						title: __( 'Colors', 'ctx-blocks' ),
						label: __( 'Background Color', 'ctx-blocks' ),
						onChange: setBackgroundColor,
						value: backgroundColor.color,
						disableCustomColors: true,
					},
				] }
			/>
			<PanelBody
				title={ __( 'Button settings', 'ctx-blocks' ) }
				initialOpen={ true }
			>
				<SelectControl
					title={ __( 'Text Orientation' ) }
					options={ [
						{
							label: __( 'Top', 'ctx-blocks' ),
							value: 'top',
						},
						{
							label: __( 'Center', 'ctx-blocks' ),
							value: 'center',
						},
						{
							label: __( 'Bottom', 'ctx-blocks' ),
							value: 'bottom',
						},
					] }
					onChange={ ( value: string ) => {
						setAttributes( { paragraphOrientation: value } );
					} }
					value={ paragraphOrientation }
				/>

				<SelectControl
					title={ __( 'Text position on mobile' ) }
					options={ [
						{
							label: __( 'Over image', 'ctx-blocks' ),
							value: 'top',
						},
						{
							label: __( 'Within image', 'ctx-blocks' ),
							value: 'within',
						},
						{
							label: __( 'Under image', 'ctx-blocks' ),
							value: 'bottom',
						},
					] }
					onChange={ ( value: string ) => {
						setAttributes( { mobileParagraphPosition: value } );
					} }
					value={ mobileParagraphPosition }
				/>
				<CheckboxControl
					label={ __( 'Show margin at bottom', 'ctx-blocks' ) }
					help={ __(
						'If active, the rest of the page is set apart from the header'
					) }
					checked={ margin }
					onChange={ ( value: any ) =>
						setAttributes( { margin: !! value } )
					}
				/>

				<CheckboxControl
					label={ __( 'Show breadcrumbs', 'ctx-blocks' ) }
					help={ __( 'If active, the breadcrumbs are shown' ) }
					checked={ showBreadcrumbs }
					onChange={ ( value: any ) =>
						setAttributes( { showBreadcrumbs: !! value } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
