import Toolbar from './toolbar';

import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit({ ...props }) {
	const {
		attributes: { textAlignment },
		context,
	} = props;

	const { postType } = context;

	const ALLOWED_BLOCKS = [
		'ctx-blocks/button',
		'ctx-blocks/button-spacer',
		'events-manager/booking',
		'core/spacer',
	];

	const TEMPLATE =
		postType == 'event'
			? [['events-manager/booking']]
			: [['ctx-blocks/button']];

	const classes = ['ctx:buttons', `ctx:buttons__${textAlignment}`]
		.filter(Boolean)
		.join(' ');

	const innerBlocksProps = useInnerBlocksProps(
		{ className: classes },
		{
			template: TEMPLATE,
			allowedBlocks: ALLOWED_BLOCKS,
			orientation: 'horizontal',
		}
	);

	const blockProps = useBlockProps({ className: 'allignfull' });

	return (
		<>
			<Toolbar {...props} />

			<div {...blockProps}>
				<label className="ctx:control__label">
					{__('Deprecated - Please use Groups instead', 'ctx-blocks')}
				</label>
				<div {...innerBlocksProps}></div>
			</div>
		</>
	);
}
