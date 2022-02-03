
/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const CustomAppender = ( { onClick } ) => {
	return (
		
			<Button
				isSecondary
				icon="insert"
				label={ __( 'New column', 'ctx-blocks' ) }
				labelPosition="bottom"
				onClick={ onClick }
			>
				{ __( 'Add column', 'ctx-blocks' ) }
			</Button>
	
	);
};

export default CustomAppender;