/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { BaseControl, PanelBody, CheckboxControl, RangeControl, SelectControl } from '@wordpress/components';


/**
 * Inspector controls
 */
const Inspector = (props) => {
	const {
		attributes: {
			hasLightbox,
			round,
			border,
			width,
			shadow,
			flip,
			roundCorners,
			url,
			image
		},
		setAttributes,
	} = props;

	return (
		<>
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
						step={ 10 }
					/>
					{ image.subtype == 'svg+xml' && <p className="ctx:image__inspector-warning">
					<span>{__('Settings not available for SVG images', 'ctx-blocks')}</span>
					</p> }
					<CheckboxControl
							label={__('Circular image', 'ctx-blocks')}
							checked={round}
							onChange={(event) => {setAttributes( { round: event })}}
							disabled={ image.subtype == 'svg+xml'}
					/>
					<CheckboxControl
							label={__('Round corners', 'ctx-blocks')}
							checked={roundCorners}
							onChange={(event) => {setAttributes( { roundCorners: event })}}
							disabled={round || image.subtype == 'svg+xml'}
					/>
					<CheckboxControl
						label={__('Border', 'ctx-blocks')}
						checked={border}
						onChange={(event) => {setAttributes( { border: event })}}
						disabled={image.subtype == 'svg+xml'}
					/>
					<CheckboxControl
						label={__('Shadow', 'ctx-blocks')}
						checked={shadow}
						onChange={(event) => {setAttributes( { shadow: event })}}
						disabled={image.subtype == 'svg+xml'}
					/>
					<CheckboxControl
						label={__('Flip', 'ctx-blocks')}
						checked={flip}
						onChange={(event) => {setAttributes( { flip: event })}}
						disabled={image.subtype == 'svg+xml'}
					/>
				</PanelBody>
				<PanelBody
					title={__('Behaviour', 'ctx-blocks')}
					initialOpen={true}
				>
					<SelectControl
                            label={__('Action', 'ctx-blocks')}
                            value={ hasLightbox ? 'modal' : 'link' }
                            options={ [
                                { label: __('Link', 'ctx-blocks'), value: 'link' },
                                { label: __('Lightbox', 'ctx-blocks'), value: 'modal' },
                            ] }
                            onChange={ ( event ) => { setAttributes( { hasLightbox: event == "modal" } ) } }
                    />
					{ !hasLightbox && <BaseControl
                            label={__("Add a URL or a link", 'ctx-blocks')}
                        >
                            <URLInput
                                value={ url }
                                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || __('Click here', 'ctx-blocks') } ) }
                            />
                        </BaseControl> }                   
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Inspector;