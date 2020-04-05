/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { URLInput, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { BaseControl, ToggleControl, TextControl, PanelBody, PanelRow, Button, ButtonGroup } from '@wordpress/components';
import map from 'lodash/map';
/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
            setAttributes,
            buttonColor,
            setButtonColor
		} = this.props;

		const {
            title,
			url,
            size,
            isLink,
			outline,
        } = attributes;
        
        const sizeOptions = [
            {
                key: "1",
                value: 'uk-button-small',
                label: __( 'Kleiner', 'ctxblocks' ),
            },
            {
                key: "2",
                value: '',
                label: __( 'Normal', 'ctxblocks' ),
            },
            {
                key: "3",
                value: 'uk-button-large',
                label: __( 'Größer', 'ctxblocks' ),
            },
        ];

		return (
			<Fragment>
				<InspectorControls>
                    <PanelBody
                        title={__('Einstellungen', 'ctxblocks')}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Beschriftung", 'ctxblocks')}
                            value={ title }
                            placeholder="Text auf dem Button"
                            onChange={ (value) => setAttributes({ title: value }) }
                        />
                        <BaseControl
                            label="URL oder Link angeben"
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
                            />
                        </BaseControl>
                        
                        <PanelRow>
                        <label>Größe</label>
                            <ButtonGroup>
                                { map( sizeOptions, ( { label, value, key } ) => (
                                    <Button
                                        key={key}
                                        className={ value === size ? `components-coblocks-map-styles__button components-button--${ value } components-coblocks-map-styles__button--selected` : `components-button--${ value } components-coblocks-map-styles__button` }
                                        isSmall
                                        isPrimary={ value === size }
                                        onClick={ ( value ) => {
                                            setAttributes( { size: value } );
                                        } }
                                    >{ label }
                                    </Button>
								) ) }
                            </ButtonGroup>
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Nur Außenlinie zeigen", 'ctxblocks')}
                                help="Bitte beachten, dass dies keine Standard-Eigenschaft von UiKit ist. Sie müssen das CSS selbst hinzufügen."
                                checked={ outline }
                                onChange={ (value) => setAttributes({ outline: value }) 
                                }
                            />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={ __("Als Link anzeigen", 'ctxblocks')}
                                checked={ isLink }
                                onChange={ (value) => setAttributes({ isLink: value }) 
                                }
                            />
                        </PanelRow>
                        
                    </PanelBody>
                    <PanelColorSettings
                            title="Farbe"
                            colorSettings={[
                                {
                                    label: 'Legen Sie eine Farbe für den Button fest',
                                    onChange: setButtonColor ,
                                    value: buttonColor.color,
                                    disableCustomColors: true,
                                },
                            ]}
                        />
                </InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;