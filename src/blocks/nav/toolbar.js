import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

const Toolbar = (props) => {

	const {
		attributes,
		setAttributes
	} = props;

	const {
		textAlignment
	} = attributes;

	return (
		<BlockControls>
			<AlignmentToolbar
				value={ textAlignment }
				onChange={ (event) => setAttributes({ textAlignment: event }) }
			/>
		</BlockControls>
	);
	
}

export default Toolbar;