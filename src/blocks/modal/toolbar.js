import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

const Toolbar = (props) => {

	const {
		attributes,
		setAttributes
	} = props;

	const {
		buttonAlignment
	} = attributes;

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ (event) => setAttributes({ buttonAlignment: event }) }
				/>
			</BlockControls>
		</>
	);
	
}

export default Toolbar;