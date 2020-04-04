  
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
		<div className="ctx-blocks-appender">
			<Button
				icon="insert"
				label={ __( 'Neuer Listenpunkt', 'ctxblocks' ) }
				labelPosition="bottom"
				className="ctx-appender__toggle"
				onClick={ onClick }
			>
				{ __( 'Listenpunkt hinzufügen', 'ctxblocks' ) }
			</Button>
		</div>
	);
};

export default CustomAppender;