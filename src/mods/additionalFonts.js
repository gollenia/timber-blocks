const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

const allowedBlocks = [
	'core/heading', 'core/paragraph'
];

const fontOptions = [
	{
		label: __( 'Standard', 'ctx-blocks' ),
		value: '',
	},
	{
		label: __( 'Monospace', 'ctx-blocks' ),
		value: 'mono',
	},
	{
		label: __( 'Fancy', 'ctx-blocks' ),
		value: 'script',
	},
	{
		label: __( 'Serif', 'ctx-blocks' ),
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

addFilter( 'blocks.registerBlockType', 'ctx-blocks/core-font', addFontControlAttribute );



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
						title={ __( 'Font settings', 'ctx-base' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Select font', 'ctx-base' ) }
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

addFilter( 'editor.BlockEdit', 'ctx-blocks/core-font', withFontControl );


const addFontClass = ( extraProps, blockType, attributes ) => {
	
	const { font } = attributes;
	
	if ( ! allowedBlocks.includes( blockType.name ) ) {
		return extraProps;
	}

	 extraProps.className = [
		 extraProps.className || false,
		 font || false
	 ].filter(Boolean).join(" ");

	return extraProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'ctx-blocks/core-font', addFontClass );