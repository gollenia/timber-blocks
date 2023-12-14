import {
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
} from '@wordpress/block-editor';
import Inspector from './inspector';
import Toolbar from './toolbar';

import { useRef } from '@wordpress/element';

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

	console.log(props);

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
		shadow ? 'ctx:image--shadow' : false,
		round ? 'ctx:image--circle' : false,
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

	const imageStyle = {
		aspectRatio: aspectRatio ? aspectRatio : undefined,
		objectFit: aspectRatio ? 'cover' : undefined,
		transform: transformations,
		...useBorderProps(props.attributes).style,
	};

	const blockProps = useBlockProps({
		className: 'ctx:image',
		style: {
			width: width ? width + '%' : undefined,
		},
	});

	return (
		<>
			<Toolbar {...props} onSelectMedia={onSelectMedia} />
			<Inspector {...props} imageRef={imageRef} />

			<figure {...blockProps}>
				{imageUrl && (
					<img
						className={imageClasses}
						ref={imageRef}
						src={imageUrl ?? ''}
						style={imageStyle}
					/>
				)}
			</figure>
		</>
	);
}
