/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 

import { useBlockProps, RichText, InnerBlocks  } from '@wordpress/block-editor';

import {useState} from '@wordpress/element';
/**
 * Internal dependencies
 */
import Inspector from './inspector';

export default function ButtonEdit( {...props} ) {

	const {
		attributes: {
			title,
			size,
			isLink,
            modalTitle,
            modalFull,
            hasModal,
			outline,
			icon,
			iconRight
		},
		setAttributes,
		buttonColor,
		className,
	} = props;

    const TEMPLATE = [
        [ 'core/heading', { placeholder: __('Heading or Greeting', 'ctx-blocks')} ],
        [ 'core/paragraph', { placeholder: __('Some fancy text to display', 'ctx-blocks') } ],
    ];

    const [showModal, setShowModal] = useState( false );

	const classes = [
			className || false,
			"ctx-button",
			iconRight ? "btn-reverse" : false,
			size || false,
			outline ? "btn-outline" : false
	].filter(Boolean).join(" ");

    const modalClasses = [
        modalFull ? "full" : false,
        "ctx-modal"
    ].filter(Boolean).join(" ");
    
	const textColor = buttonColor.brightness == "dark" ? "#ffffff" : "#000000";

	const style = {
          background: !outline && !isLink ? buttonColor.color : 'transparent',
          boxShadow: outline ? "inset 0px 0px 0px 2px " + buttonColor.color : 'none',
          color: isLink || outline ? buttonColor.color :  textColor,
	}

	return (
		<div { ...useBlockProps() }>
			<Inspector
					{ ...props }
			/>
			<span style={style} className={ classes } onClick={() => {setShowModal(true)}}>
			{ icon && <i class="material-icons">{icon}</i>}
			<RichText
				tagName="span"
				value={ title }
				onChange={ (value) => setAttributes({ title: value }) }
				placeholder={ __( 'Button title', 'ctx-blocks' ) }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>
			</span>

            { hasModal && showModal &&
				<div className="backdrop" onClick={() => {setShowModal(false)}}>
				
					<div className={modalClasses} onClick={(event) => { event.stopPropagation(); event.preventDefault();}}>
						
						<div className="ctx-modal-title">
							<RichText	
								tagName="span"
								value={ modalTitle }
								onChange={ (value) => setAttributes({ modalTitle: value }) }
								placeholder={__("Modal title", "ctx-blocks")}
							/>
						</div> 
						<div className="ctx-modal-body">
							<InnerBlocks 
                                template={ TEMPLATE }
							/>
						</div>
					</div>  
				
				</div>
            }
		</div>
	);
}