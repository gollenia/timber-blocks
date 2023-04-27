/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, withColors } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

function ItemEdit( { ...props } ) {
	const {
		attributes: {
			text,
			contentType,
			image,
			icon,
			roundImage,
			title,
			url,
			urlIcon,
		},
		setAttributes,
		iconColor,
		iconBackgroundColor,
		className,
	} = props;

	console.log( props );

	const classes = [
		className,
		'ctx-description--' + contentType,
		'ctx-description__item',
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	const iconStyle = {
		color: iconColor.color,
		backgroundColor: iconBackgroundColor.color,
		borderRadius: roundImage ? '50%' : '0',
	};

	return (
		<>
			<div
				{ ...blockProps }
				onKeyUp={ ( event ) => {
					if (
						! event.target.classList.contains(
							'ctx-description__item'
						)
					)
						return;
					if ( event.keyCode === 13 ) {
						event.preventDefault();
						console.log( 'enter' );
						const newBlock = createBlock(
							'ctx-blocks/description-item',
							{}
						);
						props.insertBlocksAfter( newBlock );
					}
				} }
			>
				<Inspector { ...props } />
				<div class="ctx-description__icon" style={ iconStyle }>
					{ image && image.subtype != 'svg+xml' && (
						<img
							className={ roundImage ? 'round' : '' }
							src={ image.sizes.thumbnail.url }
						/>
					) }

					{ image && image.subtype === 'svg+xml' && (
						<img src={ image.url } width="3rem" height="3rem" />
					) }

					{ ! image && icon !== '' && (
						<i className="material-icons">{ icon }</i>
					) }
				</div>
				<div className="ctx-description__content">
					<RichText
						tagName="p"
						value={ title }
						onChange={ ( value ) =>
							setAttributes( { title: value } )
						}
						placeholder={ __( 'Title', 'ctx-blocks' ) }
					/>

					{ contentType !== 'date' && (
						<RichText
							tagName="p"
							label={ __( 'Text', 'ctx-blocks' ) }
							value={ text }
							onChange={ ( value ) =>
								setAttributes( { text: value } )
							}
							placeholder={ __( 'Description', 'ctx-blocks' ) }
						/>
					) }
					{ contentType === 'date' && <p>{ text }</p> }
				</div>
				{ url && (
					<div class="ctx-description__action">
						<b>
							<i class="material-icons">{ urlIcon }</i>
						</b>
					</div>
				) }
			</div>
		</>
	);
}

export default compose( [
	withColors( {
		iconColor: 'icon-color',
		iconBackgroundColor: 'background-color',
	} ),
] )( ItemEdit );
