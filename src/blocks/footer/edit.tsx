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
			'core/group',
			{
				className: 'footer',
				lock: { move: false, remove: false },
				tagName: 'footer',
			},
			[ [ 'core/paragraph' ] ],
		],
		[
			'core/group',
			{
				className: 'bottom',
				tagName: 'aside',
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

	const classes = [ 'ctx-footer', 'alignwide', className || false ]
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
