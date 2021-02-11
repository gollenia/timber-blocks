import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, PanelRow, SelectControl, ToggleControl, RangeControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            backgroundColor,
            setBackgroundColor,
        } = this.props;

		const {
            image,
            imagePosition,
            hover,
            transparent,
            imageRound,
            imageWidth,
            imageBorder,
            url,
            textAlign,
            isFirst,
            isLast
        } = attributes;

        var isSVG = ( image != null ? image.subtype == "svg+xml" : false );
		return (
			<Fragment>
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
                            label={__("Transparent", 'ctx-blocks')}
                            checked={transparent}
                            onChange={(value) => {setAttributes( { transparent: value })}}
                        />
                        <BaseControl
                            label={__('Link', 'ctx-blocks')}
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || __('Click here...', 'ctx-blocks') } ) }
                            />
                        </BaseControl>
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
                                                { !isSVG &&
                                                    <img className="" src={image.sizes.small.url} onClick={open} alt={__("No image loaded", 'ctx-blocks')}/>
                                                }
                                                { isSVG &&
                                                    <img className="" src={image.url} onClick={open} alt={__("No image loaded", 'ctx-blocks')}/>
                                                }
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>{__("Replace image", 'ctx-blocks')}</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({ image: null }) }> {__("Remove image", 'ctx-blocks')}</button>
                                            </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
                            <div className="ctx-placement">
                                <SelectControl
                                    label={__("Alignment", 'ctx-blocks')}
                                    value={ imagePosition }
                                    options={ [
                                        { label: __("Top", 'ctx-blocks'), value: 'top' },
                                        { label: __("Bottom", 'ctx-blocks'), value: 'bottom' },
                                        { label: __("Right", 'ctx-blocks'), value: 'right' },
                                        { label: __("Left", 'ctx-blocks'), value: 'left' },
                                    ] }
                                    onChange={ ( event ) => { setAttributes( { imagePosition: event } ) } }
                                />
                            </div>
                            <PanelRow>
                                <ToggleControl
                                    label={__("Rounded", 'ctx-blocks')}
                                    checked={imageRound}
                                    onChange={(value) => {setAttributes( { imageRound: value })}}
                                />
                            </PanelRow>
                            <PanelRow>
                            <ToggleControl
                                    label={__("Show border", 'ctx-blocks')}
                                    checked={imageBorder}
                                    onChange={(value) => {setAttributes( { imageBorder: value })}}
                                    disable={!imageRound }
                                />
                                </PanelRow>
                            <PanelRow>
                            <RangeControl
                                label={__("Image size in percent", 'ctx-blocks')}
                                max={ 100 }
                                min={ 10 }
                                onChange={(value) => {setAttributes( { imageWidth: value })}}
                                value={ imageWidth }
                            />
                            </PanelRow>
                    </PanelBody>
                    <PanelBody
                        title={__("Layout settings, 'ctx-blocks'")}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Is first element"
                                checked={isFirst}
                                onChange={(value) => {setAttributes( { isFirst: value })}}
                            />  
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label="Is last element"
                                checked={isLast}
                                onChange={(value) => {setAttributes( { isLast: value })}}
                            />
                        </PanelRow>

                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;