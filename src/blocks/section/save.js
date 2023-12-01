import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

function Save(props) {
	const { attributes } = props;
	const {
		backgroundImage,
		imagePosition,
		paddingTop,
		paddingBottom,
		parallaxEffect,
		fromDate,
		toDate,
	} = attributes;

	const isHidden = () => {
		if (!fromDate && !toDate) return false;
		if (fromDate && !toDate && new Date(fromDate) > new Date()) return true;
		if (!fromDate && toDate && new Date(toDate) < new Date()) return true;
		if (
			fromDate &&
			toDate &&
			(new Date(fromDate) > new Date() || new Date(toDate) < new Date())
		)
			return true;
	};

	const isVisible = () => {
		if (!fromDate && !toDate) return false;
		if (fromDate && !toDate && new Date(fromDate) <= new Date())
			return true;
		if (!fromDate && toDate && new Date(toDate) >= new Date()) return true;
		if (
			fromDate &&
			toDate &&
			new Date(fromDate) <= new Date() &&
			new Date(toDate) >= new Date()
		)
			return true;
	};

	const style = {
		backgroundImage: backgroundImage
			? 'url(' + backgroundImage.sizes.large.url + ')'
			: 'none',
		backgroundSize: 'cover',
		backgroundPosition: imagePosition,
		paddingTop: paddingTop,
		paddingBottom: paddingBottom,
	};

	const blockProps = useBlockProps.save({ style });
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return (
		<>
			{!isHidden() && (
				<section
					className="ctx__section"
					style={style}
					{...innerBlocksProps}
				></section>
			)}
		</>
	);
}
