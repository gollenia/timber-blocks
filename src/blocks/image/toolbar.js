import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const CustomToolbar = (props) => {
	const {
		attributes: { alignment },
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<AlignmentToolbar
				value={alignment}
				onChange={(event) => setAttributes({ alignment: event })}
			/>
		</BlockControls>
	);
};

export default CustomToolbar;
