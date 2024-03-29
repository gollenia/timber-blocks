import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/group'],
			transform: (attributes, innerBlocks) => {
				return createBlock('core/group', attributes, innerBlocks);
			},
		},
	],
};

export default transforms;
