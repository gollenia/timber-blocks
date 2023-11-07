/**
 * Wordpress Dependencies
 */
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ({ ...props }) => {
	const {
		attributes: { claim, customPrimaryColor },
		setAttributes,
		primaryColor,
		setPrimaryColor,
	} = props;

	return (
		<InspectorControls>
			<PanelColorSettings
				title={__('Color', 'ctx-blocks')}
				initialOpen={true}
				colorSettings={[
					{
						title: __('Colors', 'ctx-blocks'),
						label: __(
							'Color for menu highlight and logo',
							'ctx-blocks'
						),
						onChange: setPrimaryColor,
						value: primaryColor.color,
						disableCustomColors: false,
					},
				]}
			/>

			<PanelBody title={__('Content', 'ctx-blocks')} initialOpen={true}>
				<TextControl
					label={__('Claim', 'ctx-blocks')}
					value={claim}
					onChange={(value) => {
						setAttributes({ claim: value });
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
