/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl, RangeControl } from '@wordpress/components';


/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes,
            setAttributes,
        } = this.props;

		const {
            hasLightbox,
            round,
            border,
            width,
            shadow,
            flip,
            roundCorners,
        } = attributes;


		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Design', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <RangeControl
                            label={__('Width in percent', 'ctx-blocks')}
                            value={ width }
                            onChange={ ( value ) => setAttributes( { width: value } ) }
                            min={ 0 }
                            max={ 100 }
                        />
                        
                        <CheckboxControl
                                label={__('Circular Image', 'ctx-blocks')}
                                checked={round}
                                onChange={(event) => {setAttributes( { round: event })}}
                        />
                        <CheckboxControl
                                label={__('Round corners', 'ctx-blocks')}
                                checked={roundCorners}
                                onChange={(event) => {setAttributes( { roundCorners: event })}}
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
                        <CheckboxControl
                            label={__('Flip', 'ctx-blocks')}
                            checked={flip}
                            onChange={(event) => {setAttributes( { flip: event })}}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Behaviour', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <CheckboxControl
                            label={__("Lightbox", "ctx-blocks")}
                            help={__("Show image in fullscreen", 'ctx-blocks')}
                            value={hasLightbox}
                            onChange={(event) => {setAttributes( { hasLightbox: event })}}
                        />                       
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;