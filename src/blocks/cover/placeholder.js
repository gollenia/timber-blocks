/**
 * WordPress dependencies
 */
import { BlockIcon, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import icon from './icon';

/**
 * Internal dependencies
 */
import { ALLOWED_MEDIA_TYPES } from './common';

export default function CoverPlaceholder( {
	disableMediaButtons = false,
	children,
	onSelectMedia,
	onError,
	style,
	toggleUseFeaturedImage,
} ) {
	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon={ icon } /> }
			labels={ {
				title: __( 'Cover' ),
				instructions: __(
					'Drag and drop onto this block, upload, or select existing media from your library.'
				),
			} }
			onSelect={ onSelectMedia }
			accept="image/*,video/*"
			allowedTypes={ ALLOWED_MEDIA_TYPES }
			disableMediaButtons={ disableMediaButtons }
			onToggleFeaturedImage={ toggleUseFeaturedImage }
			onError={ onError }
			style={ style }
		>
			{ children }
		</MediaPlaceholder>
	);
}
