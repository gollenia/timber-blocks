import {
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import icon from './icon';
import Inspector from './inspector';
import Toolbar from './toolbar';

import { useRef } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

export default function Edit({ ...props }) {
	const {
		setAttributes,
		attributes: {
			imageUrl,
			imageId,
			imageSize,
			aspectRatio,
			width,
			round,
			border,
			shadow,
			flipX,
			flipY,
			caption,
			rotate,
		},
		className,
	} = props;

	const imageRef = useRef();

	const onSelectMedia = (media) => {
		if (!media || !media.url) {
			setAttributes({ imageUrl: undefined, imageId: undefined });
			return;
		}

		setAttributes({
			imageUrl: media.sizes[imageSize]?.source_url ?? media.url,
			imageId: media.id,
		});
	};

	const imageClasses = [
		className,
		shadow ? 'hasshadow' : false,
		round ? 'iscircle' : false,
	]
		.filter(Boolean)
		.join(' ');

	const transformations = [
		rotate ? `rotate(${rotate}deg)` : undefined,
		flipX ? 'scaleX(-1)' : undefined,
		flipY ? 'scaleY(-1)' : undefined,
	]
		.filter(Boolean)
		.join(' ');

	const borderProps = useBorderProps(props.attributes);

	const imageStyle = {
		aspectRatio: aspectRatio ? aspectRatio : undefined,
		objectFit: aspectRatio ? 'cover' : undefined,
		transform: transformations,
		width: width ? width + '%' : undefined,
		...borderProps.style,
	};

	const blockProps = useBlockProps();

	const placeholder = (content) => {
		return (
			<Placeholder
				className={'block-editor-media-placeholder'}
				withIllustration={true}
				icon={icon}
				label={__('Image')}
				instructions={__(
					'Upload an image file, pick one from your media library, or add one with a URL.'
				)}
				style={{
					aspectRatio:
						!(width && height) && aspectRatio
							? aspectRatio
							: undefined,
					width: height && aspectRatio ? '100%' : width,
					height: width && aspectRatio ? '100%' : height,
					objectFit: scale,
					...borderProps.style,
				}}
			>
				{content}
			</Placeholder>
		);
	};

	return (
		<>
			<Toolbar {...props} onSelectMedia={onSelectMedia} />
			<Inspector {...props} imageRef={imageRef} />

			<figure {...blockProps}>
				{imageUrl ? (
					<img
						className={imageClasses}
						ref={imageRef}
						src={imageUrl ?? ''}
						style={imageStyle}
					/>
				) : (
					<Placeholder
						className={'block-editor-media-placeholder'}
						withIllustration={true}
						icon={icon}
						label={__('Image')}
						instructions={__(
							'Upload an image file, pick one from your media library, or add one with a URL.'
						)}
						style={{
							aspectRatio,
							width,

							...borderProps.style,
						}}
					></Placeholder>
				)}
			</figure>
		</>
	);
}
