import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const Toolbar = ( props ) => {
	const {
		attributes,
		setAttributes,
		onSelectMedia,
		currentSettings,
		toggleUseFeaturedImage,
	} = props;

	const { textAlignment } = attributes;

	return (
		<>
			<BlockControls group="block">
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ ( event ) =>
						setAttributes( { textAlignment: event } )
					}
				/>
			</BlockControls>
		</>
	);
};

export default Toolbar;
