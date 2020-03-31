import assign from 'lodash';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

import classnames from 'classnames';

// Enable spacing control on the following blocks
const allowedBlocks = [
	'core/heading',
];

// Available spacing control options
const fontOptions = [
	{
		label: __( 'Standard' ),
		value: '',
	},
	{
		label: __( 'Monospace' ),
		value: 'mono',
	},
	{
		label: __( 'Script' ),
		value: 'script',
	},
	{
		label: __( 'Serif' ),
		value: 'serif',
	},
];

const addFontControlAttribute = ( props, name ) => {

	if ( ! allowedBlocks.includes( name ) ) {
		return props;
	}

	const attributes = {
		...props.attributes,
		font: {
			type: 'string',
			default: ''
		},
	};

	return { ...props, attributes };
};

addFilter( 'blocks.registerBlockType', 'ctx-blocks/core-heading', addFontControlAttribute );



const withFontControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		
		if ( ! allowedBlocks.includes( props.name ) ) {
			return ( <BlockEdit { ...props } /> );
		}
		
		const { attributes, setAttributes } = props;
		const { font } = attributes;

		if ( font ) {
			attributes.className = `ctx-font-${ font }`;
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Schrifteinstellung' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Schriftart' ) }
							value={ font }
							options={ fontOptions }
							onChange={ ( value ) => { setAttributes( { font: value,} );} }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withFontControl' );

addFilter( 'editor.BlockEdit', 'ctx-blocks/core-heading', withFontControl );


const addFontClass = ( extraProps, blockType, attributes ) => {
	
	const { font } = attributes;
	
	if ( ! allowedBlocks.includes( blockType.name ) ) {
		return extraProps;
	}

	extraProps.className = classnames( extraProps.className, font );

	return extraProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'ctx-blocks/core-heading', addFontClass );