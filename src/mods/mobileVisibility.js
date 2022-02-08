const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

const forbiddenBlocks = [
	"core/shortcode",
	'ctx-blocks/nav'
];

const addVisibilityControlAttribute = ( props, name ) => {

	if ( forbiddenBlocks.includes( name ) ) {
		return props;
	}

	const attributes = {
		...props.attributes,
		hiddenMobile: {
			type: 'boolean',
			default: false
        },
        hiddenDesktop: {
			type: 'boolean',
			default: false
		}
	};

	return { ...props, attributes };
};

addFilter( 'blocks.registerBlockType', 'ctx-blocks/core-visibility', addVisibilityControlAttribute );



const withVisibilityControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		if ( forbiddenBlocks.includes( props.name ) ) {
			return ( <BlockEdit { ...props } /> );
		}
		
		const { attributes, setAttributes } = props;
		const { hiddenDesktop, hiddenMobile } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Visibility', 'ctx-blocks' ) }
						initialOpen={ false }
					>
						<ToggleControl
							label={ __( 'Hide on large screens', 'ctx-blocks' ) }
							checked={ hiddenDesktop }
							onChange={ ( value ) => { setAttributes( { hiddenDesktop: value,} );} }
						/>
                        <ToggleControl
							label={ __( 'Hide on mobile devices', 'ctx-blocks' ) }
							checked={ hiddenMobile }
							onChange={ ( value ) => { setAttributes( { hiddenMobile: value,} );} }
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withVisibilityControl' );

addFilter( 'editor.BlockEdit', 'ctx-blocks/core-visibility', withVisibilityControl );


const addVisibilityClass = ( extraProps, blockType, attributes ) => {
	
	const { hiddenDesktop, hiddenMobile } = attributes;

	if ( forbiddenBlocks.includes( blockType.name ) ) {
		return extraProps;
	}

    extraProps.className = [
        hiddenDesktop ? "md:hidden" : false,
        hiddenMobile ? "hidden md:visible" : false,
        extraProps.className || false
	].filter(Boolean).join(" ")
	
	return extraProps;
};

addFilter( 'blocks.getSaveContent.extraProps', 'ctx-blocks/core-visibility', addVisibilityClass );