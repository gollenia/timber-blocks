import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { DateTimePicker, TextControl, ToggleControl, SelectControl, PanelBody, PanelRow } from '@wordpress/components';

class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
		} = this.props;

		const {
            contentType,
            text,
            image,
            roundImage,
            icon
        } = attributes;

        const onUpdateDate = ( dateTime ) => {
			var newDateTime = moment(dateTime).format( 'YYYY-MM-DD HH:mm' );
			setAttributes( { text: newDateTime } );
        };

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Appearance', 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <PanelRow>
                        <SelectControl
                            label={ __( 'Type of content', 'ctx-blocks') }
                            value={ contentType } // e.g: value = [ 'a', 'c' ]
                            onChange={ ( value ) => { setAttributes( { contentType: value, text: "", icon: value } ) } }
                            options={ [
                                { value: '', label: __("Other", 'ctx-blocks') },
                                { value: 'date', label: __("Date", 'ctx-blocks') },
                                { value: 'time', label: __("Time", 'ctx-blocks') },
                                { value: 'place', label: __("Place", 'ctx-blocks') },
                                { value: 'person', label: __("Person", 'ctx-blocks')}
                            ] }
                        />
                        </PanelRow>
                        
                        { contentType === "date" &&
                        <div class="ctx-date-select">
                            <DateTimePicker
                                currentDate={ text }
                                onChange={ ( val ) => onUpdateDate( val ) }
                                is12Hour={ false }
                            />
                            </div>
                            }
               
                        
                    </PanelBody>
                    <PanelBody
                        title={__("Image", 'ctx-blocks')}
                        initialOpen={true}
                    >
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media}) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !image && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>{__('Choose image', 'ctx-blocks')}</button> }
                                        { image && <div>
                                            <Fragment>
                                            <img className="" src={image.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>{__("Replace image", 'ctx-blocks')}</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({image: null}) }> {__("Remove image", 'ctx-blocks')}</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                } }
                            />
                        </MediaUploadCheck>
                        <PanelRow>
                            <ToggleControl
                                label={__("Rounded", 'ctx-blocks')}
                                checked={ roundImage }
                                onChange={ (value) => setAttributes( { roundImage: value } ) }
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__("Icon", 'ctx-blocks')}
                                value={ icon }
                                onChange={ ( value ) => setAttributes( { icon: value } ) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;