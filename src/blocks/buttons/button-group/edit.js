import Toolbar from './toolbar';

import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function Edit({...props}) {

    const ALLOWED_BLOCKS = ['ctx-blocks/button'];

    const TEMPLATE = [
        [
            'ctx-blocks/button'
        ]
    ];

    const {
        attributes: {
            textAlignment,
        },
        className,
    } = props;

    var style = {
        textAlign: textAlignment
    };		

    var classes = [
        "ctx-section",
        "ctx-buttons-" + textAlignment
    ].filter(Boolean).join(" ");

    const blockProps = useBlockProps({className: classes, style: style});

    return (
        <>
            <Toolbar 
                { ...props }
            />

            <div {...blockProps}>
                    <InnerBlocks 
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
					/>
            </div>
            
        </>
    );

}