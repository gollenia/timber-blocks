/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	Icon,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
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
							<div>{__('Link', 'ctx-blocks')}</div>
						</Button>
						<Button
							onClick={() =>
								setAttributes({
									action: 'modal',
									modalId:
										'modal-' +
										Math.random().toString(36).substr(2, 9),
								})
							}
							className={action === 'modal' ? 'active' : ''}
						>
							<Icon
								size="64"
								className="icon"
								icon={icons.window}
							/>
							<div>{__('Modal', 'ctx-blocks')}</div>
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
							<div>{__('Script', 'ctx-blocks')}</div>
						</Button>
					</div>

					{action === 'modal' && (
						<>
							<CheckboxControl
								label={__('Full screen size', 'ctx-blocks')}
								checked={modalFull}
								onChange={(value) =>
									setAttributes({ modalFull: !modalFull })
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
