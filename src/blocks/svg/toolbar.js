import {
	BlockControls,
	__experimentalLinkControl as LinkControl,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import {} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import { link } from '@wordpress/icons';

import { Popover, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';

const ALLOWED_MEDIA_TYPES = ['image', 'video'];

const Toolbar = (props) => {
	const { attributes, setAttributes, onSelectMedia } = props;

	const {
		url,
		id,
		linkTarget,
		linkUrl,
		linkNewTab,
		linkRel,
		href,
		linkClass,
	} = attributes;

	const [isEditingURL, setIsEditingURL] = useState(false);

	return (
		<>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/svg+xml"
					onSelect={onSelectMedia}
					name={
						!url
							? __('Add SVG', 'ctx-blocks')
							: __('Replace', 'ctx-blocks')
					}
				/>

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
						value={{
							url: linkUrl,
							opensInNewTab: linkNewTab,
						}}
						onChange={(linkObject) =>
							setAttributes({
								linkRel: linkObject.rel,
								linkUrl: linkObject.url,
								linkNewTab: linkObject.opensInNewTab,
							})
						}
						onRemove={() => {
							setAttributes({
								linkUrl: '',
								linkNewTab: false,
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
