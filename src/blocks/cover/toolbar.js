import {
	BlockControls,
	MediaReplaceFlow,
	__experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { ToolbarButton } from '@wordpress/components';

import { ALLOWED_MEDIA_TYPES } from './constants';

const Toolbar = ( props ) => {
	const {
		attributes,
		setAttributes,
		onSelectMedia,
		currentSettings,
		toggleUseFeaturedImage,
	} = props;

	const { hasInnerBlocks, url } = currentSettings;

	const { contentPosition, id, useFeaturedImage } = attributes;

	return (
		<>
			<BlockControls group="block">
				<BlockAlignmentMatrixControl
					label={ __( 'Change content position', 'ctx-blocks' ) }
					value={ contentPosition }
					onChange={ ( nextPosition ) =>
						setAttributes( {
							contentPosition: nextPosition,
						} )
					}
				/>
			</BlockControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*,video/*"
					onSelect={ onSelectMedia }
					onToggleFeaturedImage={ toggleUseFeaturedImage }
					useFeaturedImage={ useFeaturedImage }
					name={
						! url
							? __( 'Add Media', 'ctx-blocks' )
							: __( 'Replace' )
					}
				/>
				{ url && (
					<ToolbarButton
						icon="trash"
						title={ __( 'Remove Media', 'ctx-blocks' ) }
						onClick={ () => {
							setAttributes( {
								id: '',
								url: '',
								focalPoint: undefined,
								useFeaturedImage: false,
							} );
						} }
					/>
				) }
			</BlockControls>
		</>
	);
};

export default Toolbar;
