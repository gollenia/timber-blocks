/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, SelectControl, CheckboxControl, RangeControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';
var Color = require('color');
/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
            overlayColor,
            setOverlayColor,
        } = this.props;

		const {
            hasLightbox,
            lightboxText,
            round,
            border,
            width,
            shadow,
            hasOverlay,
            overlayStyle,
            overlayIsDark,
            overlayPosition,
            overlayCover,
            overlayAnimation,
            overlayIcon,
            marginShift,
        } = attributes;

        function setColor(newColor) {
            
            setOverlayColor(newColor) 
            var color = new Color(newColor);
            attributes.overlayIsDark = false;
            if(color.isDark()) {
                attributes.overlayIsDark = true;
            }
        }

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Design', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <RangeControl
                            label={__('Width', 'ctx-blocks')}
                            value={ width }
                            onChange={ ( value ) => setAttributes( { width: value } ) }
                            min={ 0 }
                            max={ 100 }
                        />
                        <CheckboxControl
                                label={__('Circular', 'ctx-blocks')}
                                checked={round}
                                onChange={(event) => {setAttributes( { round: event })}}
                        />
                        <CheckboxControl
                            label={__('Border', 'ctx-blocks')}
                            checked={border}
                            onChange={(event) => {setAttributes( { border: event })}}
                        />
                        <CheckboxControl
                            label={__('Shadow', 'ctx-blocks')}
                            checked={shadow}
                            onChange={(event) => {setAttributes( { shadow: event })}}
                        />
                    </PanelBody>
                    <PanelColorSettings
                        colorSettings={[
                            {
                                title:__('Overlay color', 'ctx-blocks'),
                                onChange: setColor ,
                                value: overlayColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                    <PanelBody
                        title={__('Overlay', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label={__('Show overlay', 'ctx-blocks')}
                            checked={hasOverlay}
                            onChange={(event) => {setAttributes( { hasOverlay: event })}}
                        />
                        <CheckboxControl
                            label={__('Stretch overlay over image', 'ctx-blocks')}
                            disabled={!hasOverlay}
                            checked={overlayCover}
                            onChange={(event) => {setAttributes( { overlayCover: event })}}
                        />
                        <SelectControl
                            label={__('Position', 'ctx-blocks')}
                            disabled={!hasOverlay}
                            value={ overlayPosition }
                            options={ [
                                { label: __('Bottom', 'ctx-blocks'), value: 'bottom' },
                                { label: __('Center', 'ctx-blocks'), value: 'center' },
                                { label: __('Top', 'ctx-blocks'), value: 'top' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayPosition: event } ) } }
                        />
                        <SelectControl
                            label={__('Color', 'ctx-blocks')}
                            disabled={!hasOverlay}
                            value={ overlayStyle }
                            options={ [
                                { label:  __('Default', 'ctx-blocks'), value: '' },
                                { label:  __('Light', 'ctx-blocks'), value: 'uk-overlay-default' },
                                { label:  __('Dark', 'ctx-blocks'), value: 'uk-overlay-primary' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayStyle: event } ) } }
                        />
                        <SelectControl
                            label="Animation"
                            disabled={!hasOverlay}
                            value={ overlayAnimation }
                            options={ [
                                { label:  __('No Animation', 'ctx-blocks'), value: '' },
                                { label:  __('Fade in', 'ctx-blocks'), value: 'fade' },
                                { label:  __('Zoom in', 'ctx-blocks'), value: 'scale-up' },
                                { label:  __('Zoom out', 'ctx-blocks'), value: 'scale-down' },
                                { label:  __('Swipe from bottom', 'ctx-blocks'), value: 'slide-bottom' },
                                { label:  __('Swipe from top', 'ctx-blocks'), value: 'slide-top' },
                                { label:  __('Swipe from right', 'ctx-blocks'), value: 'slide-right' },
                                { label:  __('Swipe from left', 'ctx-blocks'), value: 'slide-left' },
                                
                            ] }
                            onChange={ ( event ) => { setAttributes( { overlayAnimation: event } ) } }
                        />

                    </PanelBody>

                    <PanelBody
                        title={__('Lightbox', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label={__('Show lightbox', 'ctx-blocks')}
                            help={__('When the image is clicked, a larger versiion is displayd in a window', 'ctx-blocks')}
                            value={hasLightbox}
                            onChange={(event) => {setAttributes( { hasLightbox: event })}}
                        />
                        <TextControl
                            label={__('Caption', 'ctx-blocks')}
                            value={lightboxText}
                            onChange={(event) =>{ setAttributes( {lightboxText: event })}}
                        />
                        
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;