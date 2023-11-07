/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	PanelColorSettings,
	URLInput,
} from '@wordpress/block-editor';
import {
	Button,
	Icon,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons';
/**
 * Inspector controls
 */
const Inspector = (props) => {
	const {
		attributes: {
			url,
			modalFull,
			icon,
			iconOnly,
			iconRight,
			newTab,
			action,
			script,
			scriptTarget,
			customButtonColor,
		},
		setAttributes,
		setButtonColor,
		buttonColor,
	} = props;

	return (
		<>
			<InspectorControls group="styles">
				<PanelColorSettings
					title={__('Color settings', 'ctx-blocks')}
					initialOpen={false}
					order={1}
					colorSettings={[
						{
							label: __('Background color', 'ctx-blocks'),
							onChange: setButtonColor,
							value: buttonColor.color,
							disableCustomColors: false,
							defaultPalette: false,
							enableAlpha: true,
						},
					]}
				/>
			</InspectorControls>
			<InspectorControls>
				<PanelBody title={__('Icon', 'ctx-blocks')} initialOpen={true}>
					<PanelRow>
						<TextControl
							label={__('Icon', 'ctx-blocks')}
							value={icon}
							onChange={(value) => {
								setAttributes({ icon: value });
							}}
						/>
					</PanelRow>

					<ToggleControl
						label={__('Show icon on the right', 'ctx-blocks')}
						checked={iconRight}
						onChange={(value) =>
							setAttributes({ iconRight: value })
						}
					/>
					<ToggleControl
						label={__(
							'Hide button text and show icon only',
							'ctx-blocks'
						)}
						checked={iconOnly}
						onChange={(value) => setAttributes({ iconOnly: value })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Behaviour', 'ctx-blocks')}
					initialOpen={true}
				>
					<div className="ctx-style-selector">
						<Button
							onClick={() => setAttributes({ action: 'link' })}
							className={action === 'link' ? 'active' : ''}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.link}
							/>
							<div>{__('Link', 'gutenberg-form')}</div>
						</Button>
						<Button
							onClick={() => setAttributes({ action: 'modal' })}
							className={action === 'modal' ? 'active' : ''}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.window}
							/>
							<div>{__('Modal', 'gutenberg-form')}</div>
						</Button>
						<Button
							onClick={() => setAttributes({ action: 'script' })}
							className={action === 'script' ? 'active' : ''}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.script}
							/>
							<div>{__('Script', 'gutenberg-form')}</div>
						</Button>
					</div>

					{action === 'modal' && (
						<>
							<ToggleControl
								label={__('Full screen size', 'ctx-blocks')}
								checked={modalFull}
								onChange={(value) =>
									setAttributes({ modalFull: !modalFull })
								}
							/>
						</>
					)}

					{action == 'link' && (
						<>
							<div className="block-editor-link-control__search-input-container">
								<URLInput
									value={url}
									placeholder={__('Search or type url')}
									onChange={(url, post) =>
										setAttributes({
											url,
											text:
												(post && post.title) ||
												__('Click here', 'ctx-blocks'),
										})
									}
								/>
							</div>
							<ToggleControl
								label={__('Open in new Tab', 'ctx-blocks')}
								checked={newTab}
								onChange={(value) =>
									setAttributes({ newTab: !newTab })
								}
							/>
						</>
					)}

					{action == 'script' && (
						<>
							<SelectControl
								label={__('Script', 'ctx-blocks')}
								value={script}
								options={[
									{
										label: __(
											'Select a script',
											'ctx-blocks'
										),
										value: '',
									},
									{
										label: __(
											'Toggle Element',
											'ctx-blocks'
										),
										value: 'toggle',
									},
									{
										label: __('Hide Element', 'ctx-blocks'),
										value: 'hide',
									},
									{
										label: __('Show Element', 'ctx-blocks'),
										value: 'show',
									},
									{
										label: __(
											'Scroll to Element',
											'ctx-blocks'
										),
										value: 'scroll',
									},
								]}
								onChange={(value) => {
									setAttributes({ script: value });
								}}
							/>

							<TextControl
								label={__('Element ID', 'ctx-blocks')}
								value={scriptTarget}
								onChange={(value) => {
									setAttributes({ scriptTarget: value });
								}}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default Inspector;
