import { useBlockProps } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import Inspector from './inspector';
import Toolbar from './toolbar';

const Edit = ( props ) => {
	const {
		attributes: { url, id, width, height, strokeWidth },
		setAttributes,
		toggleSelection,
		strokeColor,
		fillColor,
	} = props;

	const [ svgData, setSvgData ] = useState( null );

	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { url: undefined, fileId: undefined } );
			return;
		}

		setAttributes( {
			url: media.sizes?.large?.url ?? media.url,
			id: media.id,
		} );
	};

	useEffect( () => {
		if ( ! url ) {
			return;
		}

		fetch( url )
			.then( ( response ) => response.text() )
			.then( ( data ) => {
				setSvgData( data );
			} );
	}, [ url ] );

	const blockProps = useBlockProps();

	const svgStyle = {
		width: width + 'px',
		height: height + 'px',
	};

	console.log( strokeColor, fillColor );

	return (
		<>
			<Inspector { ...props } />
			<Toolbar { ...props } onSelectMedia={ onSelectMedia } />
			<style scoped>
				{ `
					#svg-${ id } svg path {
						stroke: ${ strokeColor.color };
						fill: ${ fillColor.color };
						stroke-width: ${ strokeWidth };
					}
				` }
			</style>
			<figure { ...blockProps }>
				{ svgData && (
					<ResizableBox
						minWidth={ 16 }
						minHeight={ 16 }
						size={ {
							width,
							height,
						} }
						onResizeStart={ () => {
							toggleSelection( false );
						} }
						onResizeStop={ ( event, direction, elt, delta ) => {
							setAttributes( {
								width: width + delta.width,
								height: height + delta.height,
							} );
							toggleSelection( true );
						} }
						enable={ {
							top: false,
							right: true,
							bottom: true,
							left: false,
						} }
					>
						<div
							id={ 'svg-' + id }
							style={ svgStyle }
							dangerouslySetInnerHTML={ {
								__html: svgData,
							} }
						/>
					</ResizableBox>
				) }
			</figure>
		</>
	);
};

export default Edit;
