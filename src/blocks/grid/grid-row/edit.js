/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons.js';

const ALLOWED_BLOCKS = [ 'ctx-blocks/grid-column' ];

export default function GridRowEdit( { ...props } ) {
	const {
		attributes: { equalizer, divider, childrenWidthLarge },
		__unstableLayoutClassNames: layoutClassNames,
	} = props;

	const TEMPLATE = [
		[ 'ctx-blocks/grid-column' ],
		[ 'ctx-blocks/grid-column' ],
	];

	const classes = [
		'ctx:row__columns',
		`ctx:row__columns--${ childrenWidthLarge }`,
		equalizer ? `ctx:row--equalize` : false,
		divider ? `ctx:row--separator` : false,
	]
		.filter( Boolean )
		.join( ' ' );

	const blockProps = useBlockProps( {
		className: 'ctx:row is-layout-constrain has-global-padding ' + classes,
	} );

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		blockProps,

		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			orientation: 'horizontal',
		}
	);

	console.log( blockProps );

	return (
		<>
			<Inspector { ...props } />

			<div { ...innerBlocksProps }>
				<div className="ctx:control__label ctx:row__label">
					<label>
						{ __( 'Row (columns: ', 'ctx-blocks' ) +
							childrenWidthLarge +
							')' }
					</label>
					<div className="ctx:row__icons">
						{ equalizer && (
							<Icon
								className="ctx:row__icon"
								icon={ icons.equalizer }
								size={ 19 }
							/>
						) }
						{ divider && (
							<Icon
								className="ctx:row__icon"
								icon={ icons.divider }
								size={ 19 }
							/>
						) }
					</div>
				</div>
				{ children }
			</div>
		</>
	);
}
