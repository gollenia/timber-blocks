/**
 * Internal Dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';
import contrast from '../../common/utils/contrast';

/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, InnerBlocks, RichText} from '@wordpress/block-editor';

export default function Edit({...props}) {

		const {
			attributes: {
				buttonTitle,
				buttonSize,
				buttonIsLink,
				uniqueId,
				buttonAlignment,
				modalHasVideo,
				modalVideoUrl,
				modalTitle
			},
			setAttributes,
			buttonColor,
			className
		} = props;

		var showModal = false;

		var buttonClasses = [
			className || false,
			"ctx-button",
			buttonSize || false,
		].filter(Boolean).join(" ");

		var buttonStyle = {
			background: buttonIsLink ? "none" : buttonColor.color,
			color: buttonIsLink ? buttonColor.color : contrast(buttonColor.color) 
		}

		if(uniqueId == "") {
			setAttributes({ uniqueId: "id" + (new Date()).getTime() });
		}

		blockProps = useBlockProps();
		
		return (
			<div {...blockProps}>
				<Inspector
						{ ...props }
				/>
				<Toolbar
						{ ...props }
				/>
				<div style={{textAlign: buttonAlignment}}>
					<a style={buttonStyle} type="button" className={buttonClasses} onClick={showModal != showModal}>
						{buttonTitle === "" && <>{__("Add button title", "ctx-blocks")}</>}
						{buttonTitle !== "" && <>{buttonTitle}</>}
					</a>
				</div>
				{ showModal &&
				<div className="backdrop" onClick={showModal = false}>
				
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
								allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'core/shortcode', 'ctx-blocks/button', 'ctx-blocks/image']}
							/>}
						</div>
					</div>  
				
				</div>
			}
			</div>
		);

}