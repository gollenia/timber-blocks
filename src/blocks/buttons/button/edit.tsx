/**
 * Wordpress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
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
			isLink,
			modalTitle,
			modalFull,
			hasModal,
			outline,
			icon,
			iconRight,
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

	const colors = useSelect( 'core/block-editor' ).getSettings().colors;

	console.log( page_colors );

	const TEMPLATE = [
		[
			'core/heading',
			{ placeholder: __( 'Heading or Greeting', 'ctx-blocks' ) },
		],
		[ 'core/paragraph' ],
	];

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

	const textColor =
		buttonColor.color == undefined || colord( buttonColor.color ).isLight()
			? '#000000'
			: '#ffffff';

	const blockProps = useBlockProps( { className: 'ctx-button-block' } );

	const buttonBackground =
		buttonColor.color == ''
			? page_colors.primary_color ?? 'var(--primary)'
			: buttonColor.color;

	console.log( buttonBackground );
	const style = {
		background: ! outline && ! isLink ? buttonBackground : 'transparent',
		boxShadow: outline
			? 'inset 0px 0px 0px 2px ' + buttonBackground
			: 'none',
		color: isLink || outline ? buttonBackground : textColor,
	};

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />
			<span
				style={ style }
				className={ buttonClasses }
				onClick={ () => {
					setShowModal( true );
				} }
			>
				{ icon && <i class="material-icons">{ icon }</i> }
				<RichText
					tagName="span"
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					placeholder={ __( 'Button title', 'ctx-blocks' ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
				/>
			</span>

			{ hasModal && showModal && (
				<div
					className="backdrop"
					onClick={ () => {
						setShowModal( false );
					} }
				>
					<div
						className={ modalClasses }
						onClick={ ( event ) => {
							event.stopPropagation();
							event.preventDefault();
						} }
					>
						<div className="ctx-modal-title">
							<RichText
								tagName="span"
								value={ modalTitle }
								onChange={ ( value ) =>
									setAttributes( { modalTitle: value } )
								}
								placeholder={ __(
									'Modal title',
									'ctx-blocks'
								) }
							/>
						</div>
						<div className="ctx-modal-body">
							<InnerBlocks template={ TEMPLATE } />
						</div>
					</div>
				</div>
			) }
		</div>
	);
}
