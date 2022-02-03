import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

const Toolbar = (props) => {
	
	const {
		attributes: { buttonAlignment },
		setAttributes
	} = props;

	return (

			<BlockControls>
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ (event) => setAttributes({ buttonAlignment: event }) }
				/>
			</BlockControls>

	);
	
}

export default Toolbar;