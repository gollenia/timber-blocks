import { __ } from '@wordpress/i18n'; 
import { useBlockProps } from '@wordpress/block-editor';


export default function Edit({...props}) {

    const blockProps = useBlockProps({className: 'ctx-button-spacer'});

    return (
            <div {...blockProps}>
			
            </div>
    );

}