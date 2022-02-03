
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

const Toolbar = (props) => {
	const { attributes: { textAlignment }, setAttributes } = props;
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