/**
 * Wordpress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody } from '@wordpress/components';

const Inspector = (props) => {
	
		const {
			attributes: {
                fromDate,
				toDate,
            },
            setAttributes
		} = props;

		return (
			
				<InspectorControls>
                    <PanelBody
					title={__('Date', 'ctx-blocks')}
					initialOpen={true}
				>
				<p>{__("Show only...", "ctx-events")}</p>
				<TextControl
					value={ fromDate }
					label={__("From", "ctx-events")}
					onChange={ ( newDate ) => setAttributes( {fromDate: newDate} ) }
					is12Hour={ false }
					type="date"
				/>
				<TextControl
					label={__("To", "ctx-events")}
					value={ toDate }
					onChange={ ( newDate ) => setAttributes( {toDate: newDate} ) }
					is12Hour={ false }
					type="date"
				/>
                        
            </PanelBody>
                    
                    
                </InspectorControls>
			
		);
	
}

export default Inspector;