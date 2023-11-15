import {
	InnerBlocks,
	RichText,
	getColorClassName,
	useBlockProps,
} from '@wordpress/block-editor';

const ButtonSave = (props) => {
	const {
		attributes: {
			title,
			size,

			action,

			icon,
			url,
			modalId,
			iconRight,
			iconOnly,
		},

		buttonColor,
		className,
	} = props;

	const hasModal = action == 'modal';

	const backgroundColorClass = getColorClassName(
		'background-color',
		buttonColor
	);

	const buttonClasses = [
		className || false,
		'ctx__button',
		backgroundColorClass,
		iconRight ? 'ctx__button-reverse' : false,
		size || false,
	]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({ className: buttonClasses });

	const Tag = action == 'link' ? 'a' : 'button';

	return (
		<>
			<Tag
				{...blockProps}
				data-modal={hasModal ? modalId : undefined}
				href={url ?? undefined}
			>
				{icon && <i className="material-icons">{icon}</i>}
				{!iconOnly && <RichText.Content value={title} />}
			</Tag>
			<InnerBlocks.Content />
		</>
	);
};

export default ButtonSave;
