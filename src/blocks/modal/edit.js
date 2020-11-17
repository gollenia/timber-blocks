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
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks, RichText} from '@wordpress/block-editor';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

class ModalEdit extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			showModal: false
		};
	}

	render() {
		const {
			attributes,
			setAttributes,
			buttonColor,
			className
		} = this.props;

		const {
			buttonTitle,
			buttonSize,
			buttonIsLink,
			uniqueId,
			buttonAlignment,
			modalHasVideo,
			modalVideoUrl,
			modalTitle
		} = attributes	

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
		
		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<Toolbar
						{ ...this.props }
				/>
				<div style={{textAlign: buttonAlignment}}>
					<a style={buttonStyle} type="button" className={buttonClasses} onClick={() => this.setState( { showModal: true } )}>
						{buttonTitle === "" && <Fragment>Beschriftung hinzufügen</Fragment>}
						{buttonTitle !== "" && <Fragment>{buttonTitle}</Fragment>}
					</a>
				</div>
				<div className="backdrop" style={this.state.showModal ? {} : { display: 'none' }} onClick={() => this.setState( { showModal: false } )}></div>
				<div className="modal" style={this.state.showModal ? {} : { display: 'none' }}>
					{!modalHasVideo &&
					<div className="modal-title">
						<RichText	
							tagName="h3"
							value={ modalTitle }
							onChange={ (value) => setAttributes({ modalTitle: value }) }
							placeholder="Titel eingeben"
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
			</Fragment>
		);
	};

}

export default  compose([withColors('buttonColor')])(ModalEdit);