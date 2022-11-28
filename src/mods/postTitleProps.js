const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, RadioControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

const addPostTitleAttribute = ( props, name ) => {
	if ( name !== 'core/post-title' ) {
		return props;
	}

	const attributes = {
		...props.attributes,
		linkTitle: {
			type: 'string',
			default: '',
		},
		linkIcon: {
			type: 'string',
			default: '',
		},
		linkIconOrientation: {
			type: 'string',
			default: 'right',
		},
	};

	return { ...props, attributes };
};

addFilter(
	'blocks.registerBlockType',
	'ctx-blocks/title',
	addPostTitleAttribute
);

const withPostTitleControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/post-title' ) {
			return <BlockEdit { ...props } />;
		}

		console.log( BlockEdit );
		const { attributes, setAttributes } = props;
		const { linkTitle, linkIcon, linkIconOrientation } = attributes;

		console.log( BlockEdit.InspectorControls );
		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Link Options', 'ctx-blocks' ) }
						initialOpen={ true }
					>
						<TextControl
							label={ __( 'Link Text', 'ctx-blocks' ) }
							onChange={ ( value ) => {
								setAttributes( { linkTitle: value } );
							} }
							value={ linkTitle }
						/>
						<TextControl
							label={ __( 'Icon', 'ctx-blocks' ) }
							onChange={ ( value ) => {
								setAttributes( { linkIcon: value } );
							} }
							value={ linkIcon }
						/>
						<RadioControl
							label="Icon Position"
							help="Prepend or append the icon"
							selected={ linkIconOrientation }
							options={ [
								{
									label: __( 'Left', 'ctx-blocks' ),
									value: 'left',
								},
								{
									label: __( 'Right', 'ctx-blocks' ),
									value: 'right',
								},
							] }
							onChange={ ( value ) =>
								setAttributes( { linkIconOrientation: value } )
							}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withPostTitleControl' );

addFilter( 'editor.BlockEdit', 'ctx-blocks/title', withPostTitleControl );
