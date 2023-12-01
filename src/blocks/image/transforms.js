import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/image'],
			transform: (attributes, innerBlocks) => {
				return createBlock('core/image', attributes, innerBlocks);
			},
		},
	],
};

export default transforms;
