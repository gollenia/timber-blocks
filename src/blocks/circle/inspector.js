import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { BaseControl, PanelBody, SelectControl, CheckboxControl, RangeControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

class Inspector extends Component {

	render() {
        const {
			attributes,
            setAttributes,
            backgroundColor,
            setBackgroundColor,
            borderColor,
            setBorderColor
		} = this.props;

		const {
			image,
            size,   //Aussehen
            border, //Aussehen x
            borderTransparent,
            boxShadow,  //Aussehen x
            url,    //Verhalten
            hasSatellites       //Aussehen, Checkbox
        } = attributes;

        const marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 25,
                label: '25%',
            },
            {
                value: 50,
                label: '50%',
            },
            {
                value: 75,
                label: '75%',
            },
            {
                value: 100,
                label: '100%',
            }
        ];

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title="Aussehen"
                        initialOpen={false}
                    >
                        <CheckboxControl
                            label="Rand"
                            help="Zeigt einen breiten Raund um den Kreis"
                            checked={border}
                            onChange={(event) => {setAttributes( { border: event })}}
                        />
                        <CheckboxControl
                            label="Rand ist halbtransparent"
                            disabled={!border}
                            checked={borderTransparent}
                            onChange={(event) => {setAttributes( { borderTransparent: event })}}
                        />
                        <CheckboxControl
                            label="Schatten"
                            checked={boxShadow}
                            onChange={(event) => {setAttributes( { boxShadow: event })}}
                        />
                        <CheckboxControl
                            label="Satelliten"
                            help="Zeigt zwei kleinere Kreise um den KReis herum an"
                            checked={hasSatellites}
                            onChange={(event) => {setAttributes( { hasSatellites: event })}}
                        />
                        <RangeControl
                                label="Breite"
                                value={ size }
                                onChange={ ( event ) => {setAttributes( { size: event })}}
                                min={ 0 }
                                max={ 100 }
                                step={ 5 }
                                marks={ marks }
                                help="Bitte beachten, dass die Leserlichkeit auf Mobilgeräten dadurch beeinträchtigt werden kann"
                        />

                    </PanelBody>
                    <PanelBody
                        title="Verhalten"
                        initialOpen={false}
                    >
                        <BaseControl
                            label="URL oder Link angeben"
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Hier klicken' } ) }
                            />
                        </BaseControl>
                        </PanelBody>

                    <PanelColorSettings
                        title="Farbe"
                        initialOpen={false}
                        colorSettings={[
                            {
                                label: 'Hintergrundfarbe',
                                onChange: setBackgroundColor ,
                                value: backgroundColor.color,
                                disableCustomColors: true,
                            },
                            {
                                label: 'Randfarbe',
                                onChange: setBorderColor ,
                                value: borderColor.color,
                                disableCustomColors: true,
                            }
                        ]}
                    />
                        
                    <PanelBody
                        title={__('Bild', 'ctxblocks')}
                        initialOpen={false}
                    >
                        <MediaUploadCheck>
                        <MediaUpload
                                onSelect={ ( media ) => setAttributes({image: media}) }
                                label="Bild"
                                value= { image }
                                render={ ( { open } ) => {
                                    return <div className="editor-post-featured-image ctx-image-select">
                                        { !image && <button type="button" className="components-button editor-post-featured-image__toggle" onClick={ open }>Bild auswählen</button> }
                                        { image && <div>
                                            <Fragment>
                                            <img className="" src={image.sizes.small.url} onClick={open} alt="Kein Bild geladen"/>
                                                <button type="button" className="components-button is-button is-default is-large" onClick={ open }>Bild ersetzen</button>
                                                <button type="button" className="components-button is-link is-destructive" onClick={ () => setAttributes({ image: null }) }> Beitragsbild entfernen</button>
                                            </Fragment>
                                        </div> }
                                    </div> ;
                                 } }
                            />
                            </MediaUploadCheck>
                    </PanelBody>
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;