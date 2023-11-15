import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
} from '@wordpress/block-editor';
import {
	Button,
	Icon,
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons';

const Inspector = (props) => {
	const {
		attributes,
		setAttributes,
		iconColor,

		iconBackgroundColor,
		setIconColor,
		setIconBackgroundColor,
	} = props;

	const { image, roundImage, url, urlIcon, icon, styleVariation } =
		attributes;

	console.log(props.attributes);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Behaviour', 'ctx-blocks')}
					initialOpen={true}
				>
					<TextControl
						label={__('Link', 'ctx-blocks')}
						value={url}
						onChange={(value) => setAttributes({ url: value })}
					/>
					<TextControl
						label={__('Icon for Link', 'ctx-blocks')}
						value={urlIcon}
						onChange={(value) => setAttributes({ urlIcon: value })}
					/>
				</PanelBody>

				<PanelBody title={__('Image', 'ctx-blocks')} initialOpen={true}>
					<div className="ctx-style-selector">
						<Button
							onClick={() =>
								setAttributes({ styleVariation: 'image' })
							}
							className={
								styleVariation === 'image' ? 'active' : ''
							}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.image}
							/>
							<div>{__('Image', 'ctx-blocks')}</div>
						</Button>
						<Button
							onClick={() =>
								setAttributes({
									styleVariation: 'icon',
								})
							}
							className={
								styleVariation === 'icon' ? 'active' : ''
							}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.icon}
							/>
							<div>{__('Icon', 'ctx-blocks')}</div>
						</Button>
						<Button
							onClick={() =>
								setAttributes({ styleVariation: 'bullet' })
							}
							className={
								styleVariation === 'bullet' ? 'active' : ''
							}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.bullet}
							/>
							<div>{__('Bullet', 'ctx-blocks')}</div>
						</Button>
					</div>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ image: media })
							}
							label="Bild"
							value={image}
							render={({ open }) => {
								return (
									<div className="editor-post-featured-image ctx-image-select">
										{!image && (
											<button
												type="button"
												className="components-button editor-post-featured-image__toggle"
												onClick={open}
											>
												{__(
													'Choose image',
													'ctx-blocks'
												)}
											</button>
										)}
										{image && (
											<div>
												<img
													className=""
													src={image.url}
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
															image: null,
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
					<PanelRow>
						<ToggleControl
							label={__('Rounded', 'ctx-blocks')}
							checked={roundImage}
							onChange={(value) =>
								setAttributes({ roundImage: value })
							}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('Icon', 'ctx-blocks')}
							value={icon}
							onChange={(value) => setAttributes({ icon: value })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={__('Color settings', 'ctx-blocks')}
					initialOpen={false}
					colorSettings={[
						{
							label: __('Icon color', 'ctx-blocks'),
							onChange: setIconColor,
							value: iconColor.color,
							disableCustomColors: false,
							clearable: true,
							defaultPalette: false,
							enableAlpha: true,
						},
						{
							label: __('Background color', 'ctx-blocks'),
							onChange: setIconBackgroundColor,
							value: iconBackgroundColor.color,
							clearable: true,
							disableCustomColors: false,
							defaultPalette: false,
						},
					]}
				/>
			</InspectorControls>
		</>
	);
};

export default Inspector;
