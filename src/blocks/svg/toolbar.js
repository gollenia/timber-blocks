import {
	BlockControls,
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const Toolbar = ( props ) => {
	const { attributes, setAttributes, onSelectMedia } = props;

	const {
		url,
		id,
		linkTarget,
		linkDestination,
		linkClass,
		linkRel,
		href,
	} = attributes;

	function onSetHref( props ) {
		setAttributes( props );
	}

	return (
		<>
			<BlockControls group="other">
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/svg+xml"
					onSelect={ onSelectMedia }
					name={
						! url ? __( 'Add SVG', 'ctx-blocks' ) : __( 'Replace' )
					}
				/>
				<ImageURLInputUI
					url={ href || '' }
					onChangeUrl={ onSetHref }
					linkDestination={ linkDestination }
					mediaUrl={ url }
					mediaLink={ false }
					linkTarget={ linkTarget }
					linkClass={ linkClass }
					rel={ linkRel }
				/>
			</BlockControls>
		</>
	);
};

export default Toolbar;
