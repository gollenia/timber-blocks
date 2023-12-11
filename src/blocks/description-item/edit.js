/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';
/**
 * WordPress dependencies
 */
import {
	getColorClassName,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	useInnerBlocksProps,
	withColors,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

import { useRef } from '@wordpress/element';

function ItemEdit({ ...props }) {
	const {
		attributes: { icon, url, urlIcon, imageUrl },
		iconColor,
		customIconColor,
		customIconBackgroundColor,
		iconBackgroundColor,
		className,
		setAttributes,
		backgroundColor,
	} = props;

	const imageRef = useRef();

	const onSelectMedia = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageUrl: undefined, imageId: undefined });
			return;
		}
		setAttributes({
			imageUrl: media.sizes?.thumbnail?.url ?? media.url,
			imageId: media.id,
		});
	};

	const classes = [className, 'ctx__description-item']
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps({
		className: classes,
	});

	const borderProps = useBorderProps(props.attributes);
	const imageStyle = {
		...borderProps.style,
		color: iconColor?.color ?? customIconColor ?? 'none',
		backgroundColor:
			iconBackgroundColor?.color ?? customIconBackgroundColor ?? 'none',
	};

	const imageClasses = [
		'ctx__description-item-image',
		getColorClassName('color', iconColor),
		getColorClassName('background-color', iconBackgroundColor),
		icon === 'label' && !imageUrl && 'ctx__description-item-image-bullet',
	].join(' ');

	const TEMPLATE = [
		[
			'core/heading',
			{
				placeholder: 'Title',
				level: 4,
				className: 'title',
				style: { spacing: { margin: { top: '0px', bottom: '0px' } } },
			},
		],
		['core/paragraph', { placeholder: 'Description' }],
	];
	const innerBlockProps = useInnerBlocksProps(
		{ className: 'ctx__description-item-content' },
		{
			template: TEMPLATE,
			allowedBlocks: ['core/paragraph', 'core/heading'],
		}
	);

	return (
		<>
			<div
				{...blockProps}
				style={{
					...blockProps.style,
					backgroundColor: 'none !important',
				}}
			>
				<Inspector {...props} />
				<Toolbar {...props} onSelectMedia={onSelectMedia} />
				<div className={imageClasses} style={imageStyle}>
					{imageUrl && <img src={imageUrl} ref={imageRef} />}

					{!imageUrl && <i className="material-icons">{icon}</i>}
				</div>

				<div
					className="ctx__description-item__content"
					{...innerBlockProps}
				></div>
				{url && (
					<div class="ctx__description-item__action">
						<b>
							<i class="material-icons">{urlIcon}</i>
						</b>
					</div>
				)}
			</div>
		</>
	);
}

export default compose([
	withColors({
		iconColor: 'icon-color',
		iconBackgroundColor: 'background-color',
	}),
])(ItemEdit);
