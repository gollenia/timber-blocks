import {
	AlignmentToolbar,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import { ToolbarButton } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const Toolbar = ( props ) => {
	const { attributes, setAttributes, onSelectMedia } = props;

	const { textAlign, imageId, imageUrl } = attributes;

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( event ) =>
						setAttributes( { textAlign: event } )
					}
				/>
			</BlockControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={ imageId }
					mediaURL={ imageUrl }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*,video/*"
					onSelect={ onSelectMedia }
					name={
						! imageUrl
							? __( 'Add Media', 'ctx-blocks' )
							: __( 'Replace' )
					}
				/>
				{ imageUrl && (
					<ToolbarButton
						icon="trash"
						title={ __( 'Remove Media', 'ctx-blocks' ) }
						onClick={ () => {
							setAttributes( {
								imageId: 0,
								imageUrl: '',
								focalPoint: undefined,
							} );
						} }
					/>
				) }
			</BlockControls>
		</>
	);
};

export default Toolbar;
