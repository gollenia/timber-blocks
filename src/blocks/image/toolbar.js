import { BlockControls, MediaReplaceFlow } from '@wordpress/block-editor';

import { ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ALLOWED_MEDIA_TYPES } from './common';

const Toolbar = (props) => {
	const {
		attributes: { alignment, imageUrl, imageId },
		setAttributes,
		onSelectMedia,
	} = props;

	return (
		<BlockControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={imageId}
					mediaURL={imageUrl}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*,video/*"
					onSelect={onSelectMedia}
					name={
						!imageUrl
							? __('Add Media', 'ctx-blocks')
							: __('Replace', 'ctx-blocks')
					}
				/>
				{imageUrl && (
					<ToolbarButton
						icon="trash"
						title={__('Remove Media', 'ctx-blocks')}
						onClick={() => {
							setAttributes({
								imageId: 0,
								imageUrl: '',
								focalPoint: undefined,
							});
						}}
					/>
				)}
			</BlockControls>
		</BlockControls>
	);
};

export default Toolbar;
