import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';
import { WpBlock } from '../../../common/types/block';
import { WpColor } from '../../../common/types/color';
import Inspector from './inspector';

type Props = {
	attributes: {
		paragraphOrientation: string;
	};
	backgroundColor: WpColor;
	className: string;
	clientId: string;
	setAttributes: ( {} ) => {};
};

const Edit = ( props: Props ) => {
	const {
		attributes: { paragraphOrientation },
		className,
		backgroundColor,
		clientId,
		setAttributes,
	} = props;

	const blocks = useSelect(
		( select ) => {
			const { getBlocks } = select( 'core/block-editor' );

			return getBlocks< Array< WpBlock > >( clientId );
		},
		[ clientId ]
	);

	const hasImage = !! blocks.find( ( block: WpBlock ) => {
		return block.name == 'core/post-featured-image';
	} );

	useEffect( () => {
		setAttributes( { hasImage } );
	}, [ hasImage ] );

	const template = [
		[ 'core/post-featured-image', [] ],
		[
			'ctx-blocks/header-content',
			{ className: 'header__content' },
			[
				[
					'core/group',
					{ className: 'ctx:header-text' },
					[ [ 'core/paragraph' ] ],
				],
				[ 'core/post-title' ],
			],
		],
	];

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'ctx:header__container' },
		{ template, renderAppender: false }
	);

	const style = {
		backgroundColor: backgroundColor.color,
	};

	const classes = [
		'ctx-header',
		hasImage ? 'ctx-header-has-image' : false,
		'ctx:header-' + paragraphOrientation,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes, style } );

	return (
		<>
			<Inspector { ...props } />

			<div { ...blockProps } style={ style }>
				<div { ...innerBlocksProps }></div>
			</div>
		</>
	);
};

export default Edit;
