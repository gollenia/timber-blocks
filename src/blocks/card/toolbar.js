import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

const Toolbar = (props) => {
	
	const {
		attributes,
		setAttributes
	} = props;

	const {
		textAlign
	} = attributes;

	return (
		<BlockControls>
			<AlignmentToolbar
				value={ textAlign }
				onChange={ (event) => setAttributes({ textAlign: event }) }
			/>

		</BlockControls>
	);
	
}

export default Toolbar;