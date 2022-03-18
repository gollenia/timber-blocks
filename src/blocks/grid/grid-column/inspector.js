/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { RangeControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

/**
 * Inspector controls
 */
const Inspector = (props) => {

	const {
		attributes: {
			widthSmall,
			widthLarge,
			widthMedium,
			mobilePosition
		},
		setAttributes,
	} = props;

	return (
		
		<InspectorControls>
			<PanelBody
				title={__("Mobile appearance", 'ctx-blocks')}
				help={__("How should the column behave on small devices?")}
				initialOpen={true}
			>
				<RangeControl
					label={__("Column span on mobile devices", 'ctx-blocks')}
					max={ 3 }
					min={ 0 }
					onChange={(event) => {setAttributes( { widthSmall: event })}}
					value={ widthSmall }
				/>
				<RangeControl
					label={__("Columns span on tablets and small displays", 'ctx-blocks')}
					max={ 12 }
					min={ 0 }
					onChange={(event) => {setAttributes( { widthMedium: event })}}
					value={ widthMedium }
				/>
				<RangeControl  
					label={__("Column span on Desktops", 'ctx-blocks')}
					max={ 12 }
					min={ 0 }
					onChange={(event) => {setAttributes( { widthLarge: event })}}
					value={ widthLarge }
				/>                        
			
				<SelectControl
					label={__('Position on mobile devices', 'ctx-blocks')}
					value={ mobilePosition }
					options={ [
						{ label: __('In place', 'ctx-blocks'), value: '' },
						{ label: __('Start', 'ctx-blocks'), value: 'first' },
						{ label: __('End', 'ctx-blocks'), value: 'last' },
					] }
					onChange={ ( event ) => { setAttributes( { mobilePosition: event } ) } }
				/>
				
			</PanelBody>
		</InspectorControls>
		
	);
	
}

export default Inspector;