/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, RangeControl, PanelBody, RadioControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

/**
 * Inspector controls
 */
class Inspector extends Component {


	render() {
		const {
			attributes: {
                backgroundImage,
                imagePosition,
                paddingTop,
                paddingBottom,
                parallaxEffect
            },
            setAttributes,
            backgroundColor,
            setBackgroundColor,
        } = this.props;
        

		return (

				<InspectorControls>            
                    <PanelColorSettings
                        colorSettings={[
                            {
                                title: __('Colors', 'ctx-blocks'),
                                label: __('Background Color', 'ctx-blocks'),
                                onChange: setBackgroundColor ,
                                value: backgroundColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                        
                    <PanelBody
                        title={__('Background Image', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({backgroundImage: media}) }
                                label={__("Image", "ctx-blocks")}
                                value= { backgroundImage }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !backgroundImage && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>{__("Select image", "ctx-blocks")}</button> }
                                        { backgroundImage && <div>
                                       
                                            <img className="" src={backgroundImage.sizes.medium.url} onClick={open} alt={__("No image loaded", "ctx-blocks")}/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>{__("Replace image", "ctx-blocks")}</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({backgroundImage: null}) }> {__("Remove image", "ctx-blocks")}</button>
                                          
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
                        <div className="ctx-image-position">
                            <RadioControl
                                label={__("Image orientation", "ctx-blocks")}
                                selected={ imagePosition }
                                disabled={!backgroundImage}
                                options={ [
                                    { label: __('Top left', "ctx-blocks"), value: 'top left' },
                                    { label: __('Top center', "ctx-blocks"), value: 'top center' },
                                    { label: __('Top right', "ctx-blocks"), value: 'top right' },
                                    { label: __('Middel left', "ctx-blocks"), value: 'center left' },
                                    { label: __('Fully centered', "ctx-blocks"), value: 'center' },
                                    { label: __('Middle right', "ctx-blocks"), value: 'center right' },
                                    { label: __('Bottom left', "ctx-blocks"), value: 'bottom left' },
                                    { label: __('Bottom center', "ctx-blocks"), value: 'bottom center' },
                                    { label: __('Bottom right', "ctx-blocks"), value: 'bottom right' }
                                ] }
                                onChange={ ( position ) => { setAttributes( { imagePosition: position } ) } }
                            />
                        </div>
                        <CheckboxControl
                            label={__("Parallax-Effect", "ctx-blocks")}
                            disabled={!backgroundImage}
                            onChange={(event) => {setAttributes( { parallaxEffect: event })}}
                            checked={ parallaxEffect }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Padding', 'ctx-blocks')}
                        initialOpen={false}
                    >
                        <RangeControl
                            label={__("Padding Top", "ctx-blocks")}
                            value={ paddingTop }
                            onChange={(event) => {setAttributes( { paddingTop: event })}}
                            min={ 0 }
                            max={ 11 }
                        />
                        <RangeControl
                            label={__("Padding Bottom", "ctx-blocks")}
                            value={ paddingBottom }
                            onChange={(event) => {setAttributes( { paddingBottom: event })}}
                            min={ 0 }
                            max={ 11 }
                        />
                    </PanelBody>
                </InspectorControls>
	
		);
	}
}

export default Inspector;