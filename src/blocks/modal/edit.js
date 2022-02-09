/**
 * Internal Dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

import {useState} from '@wordpress/element';

/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks, RichText} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/list', 'core/shortcode', 'ctx-blocks/button', 'ctx-blocks/image']

export default function ModalEdit({...props}) {

		const {
			attributes: {
				buttonTitle,
				buttonSize,
				buttonIsLink,
				buttonAlignment,
				modalHasVideo,
				modalVideoUrl,
				modalTitle
			},
			setAttributes,
			buttonColor,
			className
		} = props;

		const [showModal, setShowModal] = useState( false );

		

		const buttonClasses = [
			className || false,
			"ctx-button",
			buttonSize || false,
		].filter(Boolean).join(" ");

		const buttonStyle = {
			background: buttonIsLink ? "none" : buttonColor.color,
			color: buttonIsLink ? buttonColor.color : "#ffffff"
		}


		const blockProps = useBlockProps();
		
		return (
			<div {...blockProps}>
				<Inspector
						{ ...props }
				/>
				<Toolbar
						{ ...props }
				/>
				<div style={{textAlign: buttonAlignment}}>
					<a style={buttonStyle} type="button" className={buttonClasses} onClick={() => {setShowModal(true)}}>
						{buttonTitle === "" && <>{__("Add button title", "ctx-blocks")}</>}
						{buttonTitle !== "" && <>{buttonTitle}</>}
					</a>
				</div>
				{ showModal &&
				<div className="backdrop" onClick={() => {setShowModal(false)}}>
				
					<div className="modal">
						{!modalHasVideo &&
						<div className="modal-title">
							<RichText	
								tagName="h3"
								value={ modalTitle }
								onChange={ (value) => setAttributes({ modalTitle: value }) }
								placeholder={__("Modal title", "ctx-blocks")}
							/>
						</div> }
						<div className="modal-body">
							{modalHasVideo && <iframe 
									src={modalVideoUrl} 
									width="1920" 
									height="1080" 
									frameborder="0" 
									>
								</iframe>
							}
							{!modalHasVideo &&
							<InnerBlocks 
								allowedBlocks={ALLOWED_BLOCKS}
							/>}
						</div>
					</div>  
				
				</div>
			}
			</div>
		);

}