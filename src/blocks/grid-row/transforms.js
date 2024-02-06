import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/columns'],
			transform: (attributes, innerBlocks) => {
				attributes = {
					...attributes,
				};

				const newInnerBlocks = [];
				innerBlocks.forEach((block) => {
					newInnerBlocks.push(
						createBlock('core/column', {}, block.innerBlocks)
					);
				});

				console.log('innner', newInnerBlocks);
				return createBlock('core/columns', attributes, newInnerBlocks);
			},
		},
	],
};

export default transforms;
