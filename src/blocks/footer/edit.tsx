import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
//import Inspector from './inspector';

type Props = {
	attributes: {
		marginTop: number;
	};
	className: string;
	setAttributes: ( {} ) => {};
};

export default function Edit( props: Props ) {
	const { className } = props;
	const template = [
		[
			'ctx-blocks/section',
			{
				className: 'footer',
				lock: { move: false, remove: false },
				element: 'footer',
			},
			[ [ 'core/paragraph' ] ],
		],
		[
			'ctx-blocks/section',
			{
				className: 'bottom',
				paddingTop: 0,
				paddingBottom: 0,
				lock: {
					move: false,
					remove: false,
				},
			},
			[ [ 'core/paragraph' ] ],
		],
	];

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'ctx:section__container' },
		{ template, renderAppender: false }
	);

	const classes = [ 'ctx-footer', 'alignfull', className || false ]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( { className: classes } );

	return (
		<div>
			<div { ...blockProps }>
				<div { ...innerBlocksProps }></div>
			</div>
		</div>
	);
}
