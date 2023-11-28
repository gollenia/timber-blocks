import {
	AlignmentToolbar,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import { Popover, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { link } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

const ALLOWED_MEDIA_TYPES = ['image'];

const Toolbar = (props) => {
	const { attributes, setAttributes, onSelectMedia } = props;

	const { textAlign, imageId, imageUrl, url, opensInNewTab, rel } =
		attributes;

	const [isEditingURL, setIsEditingURL] = useState(false);

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(event) => setAttributes({ textAlign: event })}
				/>
			</BlockControls>
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
				<ToolbarButton
					name="link"
					icon={link}
					title={__('Link', 'ctx-blocks')}
					onClick={() => setIsEditingURL(true)}
				/>
			</BlockControls>
			{isEditingURL && (
				<Popover
					placement="bottom"
					onClose={() => {
						setIsEditingURL(false);
						richTextRef.current?.focus();
					}}
					focusOnMount={isEditingURL ? 'firstElement' : false}
					__unstableSlotName={'__unstable-block-tools-after'}
					shift
				>
					<LinkControl
						value={{ url, opensInNewTab: opensInNewTab }}
						onChange={(linkObject) =>
							setAttributes({
								rel,
								url: linkObject.url,
								opensInNewTab: linkObject.opensInNewTab,
							})
						}
						onRemove={() => {
							setAttributes({
								url: '',
								opensInNewTab: false,
							});
						}}
						forceIsEditingLink={isEditingURL}
					/>
				</Popover>
			)}
		</>
	);
};

export default Toolbar;
