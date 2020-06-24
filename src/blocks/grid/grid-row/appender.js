/**
 * External dependencies.
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const CustomAppender = ( { onClick = noop } ) => {
	return (
		
			<Button
				isSecondary
				icon="insert"
				label={ __( 'Neue Spalte', 'ctxblocks' ) }
				labelPosition="bottom"
				
				onClick={ onClick }
			>
				{ __( 'Spalte hinzufügen', 'ctxblocks' ) }
			</Button>
	
	);
};

export default CustomAppender;