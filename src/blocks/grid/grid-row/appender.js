/**
 * External dependencies.
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { IconButton } from '@wordpress/components';

const CustomAppender = ( { onClick = noop } ) => {
	return (
		<div className="ctx-blocks-appender">
			<IconButton
				icon="insert"
				label={ __( 'Neue Spalte', 'ctxblocks' ) }
				labelPosition="bottom"
				className="ctx-appender__toggle"
				onClick={ onClick }
			>
				{ __( 'Spalte hinzufügen', 'ctxblocks' ) }
			</IconButton>
		</div>
	);
};

export default CustomAppender;