/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Inspector controls
 */
const Inspector = (props) => {
	const {
		attributes: {
			backgroundImage,
			imagePosition,
			paddingTop,
			paddingBottom,
			parallaxEffect,
			fromDate,
			toDate,
		},
		setAttributes,
		backgroundColor,
		setBackgroundColor,
	} = props;

	return (
		<InspectorControls>
			<PanelColorSettings
				colorSettings={[
					{
						title: __('Colors', 'ctx-blocks'),
						label: __('Background Color', 'ctx-blocks'),
						onChange: setBackgroundColor,
						value: backgroundColor.color,
						disableCustomColors: false,
						disabled: true,
					},
				]}
			/>

			<PanelBody
				title={__('Background Image', 'ctx-blocks')}
				initialOpen={true}
			>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ backgroundImage: media })
						}
						label={__('Image', 'ctx-blocks')}
						value={backgroundImage}
						disabled={true}
						render={({ open }) => {
							return (
								<div className="editor-post-featured-image ctx-image-select">
									{' '}
									{!backgroundImage && (
										<button
											type="button"
											className="components-button editor-post-featured-image__toggle"
											onClick={open}
										>
											{__('Select image', 'ctx-blocks')}
										</button>
									)}
									{backgroundImage && (
										<div>
											<img
												className=""
												src={
													backgroundImage.sizes.medium
														.url
												}
												onClick={open}
												alt={__(
													'No image loaded',
													'ctx-blocks'
												)}
											/>
											<button
												type="button"
												className="components-button is-button is-default is-large"
												onClick={open}
											>
												{__(
													'Replace image',
													'ctx-blocks'
												)}
											</button>
											<button
												type="button"
												className="components-button is-link is-destructive"
												onClick={() =>
													setAttributes({
														backgroundImage: null,
													})
												}
											>
												{' '}
												{__(
													'Remove image',
													'ctx-blocks'
												)}
											</button>
										</div>
									)}
								</div>
							);
						}}
					/>
				</MediaUploadCheck>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
