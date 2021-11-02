/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { RangeControl, CheckboxControl, PanelBody } from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {

	render() {
		const {
			attributes: {
                gapSize,
                equalizer,
                divider,
                flowColumns,
                childrenWidthLarge,
                childrenWidthSmall,
                childrenWidthMedium
            },
            setAttributes,
        } = this.props;

		return (

				<InspectorControls>
                    <PanelBody
                        title={__("Appearance", 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <RangeControl  
                            label={__("Columns on mobile devices", 'ctx-blocks')}
                            max={ 3 }
                            min={ 1 }
                            onChange={(value) => {setAttributes( { childrenWidthSmall: value })}}
                            value={ childrenWidthSmall }
                        />
                        <RangeControl  
                            label={__("Columns on tablets and medium screens", 'ctx-blocks')}
                            max={ 6 }
                            min={ 1 }
                            onChange={(value) => {setAttributes( { childrenWidthMedium: value })}}
                            value={ childrenWidthMedium }
                        />
                        <RangeControl  
                            label={__("Columns on desktops", 'ctx-blocks')}
                            max={ 6 }
                            min={ 1 }
                            onChange={(value) => {setAttributes( { childrenWidthLarge: value })}}
                            value={ childrenWidthLarge }
                        />
                        
                        <CheckboxControl
                            label={__("Make all columns same height", 'ctx-blocks')}
                            checked={equalizer}
                            onChange={(value) => {setAttributes( { equalizer: value })}}
                        />
                        <CheckboxControl
                            label={__("Arrange in columns", 'ctx-blocks')}
                            help={__("Let children flow in columns first", 'ctx-blocks')}
                            checked={flowColumns}
                            onChange={(value) => {setAttributes( { flowColumns: value })}}
                        />
                        <CheckboxControl
                            label={__("Separate columns with borders", 'ctx-blocks')}
                            checked={divider}
                            onChange={(value) => {setAttributes( { divider: value })}}
                        />

                    </PanelBody>
                    
                </InspectorControls>
	
		);
	}
}

export default Inspector;