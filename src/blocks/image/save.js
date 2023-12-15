import {
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	useBlockProps,
} from '@wordpress/block-editor';
import { mediaPosition } from './common';

const Save = (props) => {
	const {
		attributes: {
			url,
			imageUrl,
			imageId,
			focalPoint,
			imageSize,
			width,
			aspectRatio,
			flipX,
			flipY,
			rotate,
			shadow,
		},
	} = props;

	const transformations = [
		rotate ? `rotate(${rotate}deg)` : undefined,
		flipX ? 'scaleX(-1)' : undefined,
		flipY ? 'scaleY(-1)' : undefined,
	]
		.filter(Boolean)
		.join(' ');

	const imageClasses = [shadow ? 'has-shadow' : false]
		.filter(Boolean)
		.join(' ');

	const blockProps = useBlockProps.save({ className: imageClasses });
	const borderProps = getBorderClassesAndStyles(props.attributes);

	const imageStyle = {
		width: width ? width + '%' : undefined,
		aspectRatio: aspectRatio ? aspectRatio : undefined,
		objectFit: aspectRatio ? 'cover' : undefined,
		transform: transformations,
		objectPosition:
			focalPoint && imageUrl ? mediaPosition(focalPoint) : undefined,
		...borderProps.style,
	};

	return (
		<>
			<div {...blockProps}>
				<img src={imageUrl} alt="" style={imageStyle} />
			</div>
		</>
	);
};

export default Save;
