/**
 * Wordpress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { Modal } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

export default function ButtonEdit({ ...props }) {
	const {
		attributes: {
			title,
			size,
			modalTitle,
			modalFull,
			action,
			outline,
			icon,
			iconRight,
			iconOnly,
		},
		setAttributes,
		className,
	} = props;

	const [deleteButton, setDeleteButton] = useState(false);

	const hasModal = action == 'modal';

	const TEMPLATE = [['core/paragraph']];

	const [showModal, setShowModal] = useState(false);

	const buttonClasses = [
		className || false,
		'ctx__button',
		iconRight ? 'reverse' : false,
		size || false,
	]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps({ className: buttonClasses });

	return (
		<div {...blockProps}>
			<Inspector {...props} />
			<Toolbar {...props} />
			<span
				onClick={() => {
					if (!hasModal) return;
					setShowModal(true);
				}}
			>
				{icon && <i className="material-icons">{icon}</i>}
				{!iconOnly && (
					<RichText
						tagName="span"
						value={title}
						disableLineBreaks={true}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__('Button title', 'ctx-blocks')}
						allowedFormats={['core/bold', 'core/italic']}
						onKeyUp={(event) => {
							if (event.keyCode === 13) {
								if (title == '') return;
								event.preventDefault();
								const newBlock = createBlock(
									'core/paragraph',
									{}
								);
								props.insertBlocksAfter(newBlock);
							}
							if (event.keyCode === 8 && title == '') {
								event.preventDefault();
								if (deleteButton) {
									setDeleteButton(false);
									props.onRemove();
									return;
								}
								setDeleteButton(true);
							}
						}}
					/>
				)}
			</span>

			{showModal && (
				<Modal
					title={__('Edit Modal content', 'ctx-blocks')}
					isOpen={showModal}
					onRequestClose={() => {
						setShowModal(false);
					}}
					isFullScreen={modalFull}
				>
					<RichText
						tagName="h1"
						value={modalTitle}
						onChange={(value) =>
							setAttributes({ modalTitle: value })
						}
						placeholder={__('Modal title', 'ctx-blocks')}
						allowedFormats={['core/bold', 'core/italic']}
					/>
					<InnerBlocks template={TEMPLATE} />
				</Modal>
			)}
		</div>
	);
}
