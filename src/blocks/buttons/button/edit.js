/**
 * Wordpress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { Modal } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { colord } from 'colord';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

export default function ButtonEdit( { ...props } ) {
	const {
		attributes: {
			title,
			size,
			modalTitle,
			modalFull,
			action,
			outline,
			icon,
			url,
			iconRight,
			iconOnly,
			customButtonColor,
		},
		setAttributes,
		buttonColor,
		className,
	} = props;

	const {
		meta,
		meta: { page_colors },
	} = useSelect( ( select ) => ( {
		meta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {},
	} ) );

	const hasModal = action == 'modal';

	const TEMPLATE = [ [ 'core/paragraph' ] ];

	const [ showModal, setShowModal ] = useState( false );

	const buttonClasses = [
		className || false,
		'ctx-button',
		iconRight ? 'reverse' : false,
		size || false,
		outline ? 'btn-outline' : false,
	]
		.filter( Boolean )
		.join( ' ' );

	const modalClasses = [ modalFull ? 'full' : false, 'ctx-modal' ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: 'ctx-button-block' } );

	const backgroundColor =
		buttonColor.color == undefined || buttonColor.color == ''
			? 'var(--primary)'
			: buttonColor.color;
	const textColor =
		buttonColor == undefined || colord( buttonColor.color ).isLight()
			? '#000000'
			: '#ffffff';

	const isOutline = blockProps.className?.includes( 'is-style-outline' );

	const style = {
		...blockProps.style,
		backgroundColor: isOutline ? 'transparent' : backgroundColor,
		boxShadow: isOutline
			? 'inset 0px 0px 0px 2px ' + backgroundColor
			: 'none',
		color: isOutline ? backgroundColor : textColor,
	};

	return (
		<div { ...blockProps } style={ style }>
			<Inspector { ...props } />

			<span
				className={ buttonClasses }
				onClick={ () => {
					if ( ! hasModal ) return;
					setShowModal( true );
				} }
			>
				{ icon && <i className="material-icons">{ icon }</i> }
				{ ! iconOnly && (
					<RichText
						tagName="span"
						value={ title }
						disableLineBreaks={ true }
						onChange={ ( value ) =>
							setAttributes( { title: value } )
						}
						placeholder={ __( 'Button title', 'ctx-blocks' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						onKeyUp={ ( event ) => {
							if ( event.keyCode === 13 ) {
								event.preventDefault();
								const newBlock = createBlock(
									'ctx-blocks/button',
									{}
								);
								props.insertBlocksAfter( newBlock );
							}
							if ( event.keyCode === 8 && title == '' ) {
								event.preventDefault();
								props.onRemove();
							}
						} }
					/>
				) }
			</span>

			{ showModal && (
				<Modal
					title={ __( 'Edit Modal content', 'ctx-blocks' ) }
					isOpen={ showModal }
					onRequestClose={ () => {
						setShowModal( false );
					} }
				>
					<RichText
						tagName="h1"
						value={ modalTitle }
						onChange={ ( value ) =>
							setAttributes( { modalTitle: value } )
						}
						placeholder={ __( 'Modal title', 'ctx-blocks' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
					/>
					<InnerBlocks template={ TEMPLATE } />
				</Modal>
			) }
		</div>
	);
}
