import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, PanelRow, ToggleControl, TextControl } from '@wordpress/components';
import { Icon, Button} from '@wordpress/components'
import { has } from 'lodash';
import { PanelColorSettings } from '@wordpress/block-editor';
import icons from './icons.js'

class Inspector extends Component {

	render() {
		const {
			attributes: {
                image,
                imagePosition,
                hover,
                transparent,
                url,
                label,
                shadow,
                badge,
                isFirst,
                isLast
            },
            setAttributes,
            backgroundColor,
            setBackgroundColor,
            secondaryColor,
            setSecondaryColor,
        } = this.props;


        const isSVG = ( image != null ? image.subtype == "svg+xml" : false );
        const imageUrl = image == null ? false : (!(has(image, 'sizes.medium')) || isSVG ? image.url : image.sizes.medium.url);

		return (
			
				<InspectorControls>

                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={false}
                    >
                        
                        <ToggleControl
                            label={__('Highlight on mouse over', 'ctx-blocks')}
                            checked={hover}
                            onChange={(value) => {setAttributes( { hover: value })}}
                        />
                        <ToggleControl
                            label={__('Shadow', 'ctx-blocks')}
                            checked={shadow}
                            onChange={(value) => {setAttributes( { shadow: value })}}
                        />
                        <ToggleControl
                            label={__("Transparent", 'ctx-blocks')}
                            checked={transparent}
                            onChange={(value) => {setAttributes( { transparent: value })}}
                        />
                        <PanelRow>
                            <BaseControl
                                label={__('Link', 'ctx-blocks')}
                            >
                                <URLInput
                                    value={ url }
                                    onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || __('Click here...', 'ctx-blocks') } ) }
                                />
                            </BaseControl>
                        </PanelRow>
                        <TextControl
                            label={__('label', 'ctx-blocks')}
                            value={label}
                            onChange={(value) => {setAttributes( { label: value })}}
                        />
                        <TextControl
                            label={__('badge', 'ctx-blocks')}
                            value={badge}
                            onChange={(value) => {setAttributes( { badge: value })}}
                        />
                        </PanelBody>

                    <PanelColorSettings
                        title={__('Color settings', 'ctx-blocks')}
                        initialOpen={false}
                        colorSettings={[
                            {
                                label: __('Background color', 'ctx-blocks'),
                                onChange: setBackgroundColor ,
                                value: backgroundColor.color,
                                disableCustomColors: true,
                            },
                            {
                                label: __('Secondary color', 'ctx-blocks'),
                                onChange: setSecondaryColor ,
                                value: secondaryColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                        
                    <PanelBody
                        title={__('Image', 'ctx-blocks')}
                        initialOpen={false}
                    >
                        <MediaUploadCheck>
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media}) }
                                label={__('Image', 'ctx-blocks')}
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !image && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>{__('Choose image', 'ctx-blocks')}</button> }
                                        { image && 
                                            <div>
                                                <img className="" src={imageUrl} onClick={open} alt={__("No image loaded", 'ctx-blocks')}/>
                                                <PanelRow>
                                                <Button type="button" isSecondary  onClick={ open }>{__("Replace image", 'ctx-blocks')}</Button>
                                                <Button type="button" isDestructive  onClick={ () => setAttributes({ image: null }) }> {__("Remove image", 'ctx-blocks')}</Button>
                                                </PanelRow>
                                            </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
                            <PanelRow>
                            <div>
                            <label className="components-base-control__label" htmlFor="inspector-range-control-4">{__("Image position", 'ctx-blocks')}</label>
                            <div className="imagePositionSelector">
                                    <Button onClick={ () => setAttributes({ imagePosition: "top" }) } className={imagePosition == "top" ? "active" : ""}>
                                        <Icon size="64" className="icon" icon={icons.topimage}/>
                                        <div>{__("top", 'ctx-blocks')}</div>
                                    </Button>
                                    <Button onClick={ () => setAttributes({ imagePosition: "bottom" }) } className={imagePosition == "bottom" ? "active" : ""}>
                                        <Icon size="64" className="icon" icon={icons.bottomimage}/>
                                        <div>{__("bottom", 'ctx-blocks')}</div>
                                    </Button>
                                    <Button onClick={ () => setAttributes({ imagePosition: "left" }) } className={imagePosition == "left" ? "active" : ""}>
                                        <Icon size="64" className="icon" icon={icons.leftimage}/>
                                        <div>{__("left", 'ctx-blocks')}</div>
                                    </Button>
                                    <Button onClick={ () => setAttributes({ imagePosition: "right" }) } className={imagePosition == "right" ? "active" : ""}>
                                        <Icon size="64" className="icon" icon={icons.rightimage}/>
                                        <div>{__("right", 'ctx-blocks')}</div>
                                    </Button>
                            </div>
                            </div>
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={__("Layout settings", 'ctx-blocks')}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <ToggleControl
                                label={__("Is first element", 'ctx-blocks')}
                                checked={isFirst}
                                onChange={(value) => {setAttributes( { isFirst: value })}}
                            />  
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={__("Is last element", 'ctx-blocks')}
                                checked={isLast}
                                onChange={(value) => {setAttributes( { isLast: value })}}
                            />
                        </PanelRow>

                    </PanelBody>
                </InspectorControls>

		);
	}
}

export default Inspector;