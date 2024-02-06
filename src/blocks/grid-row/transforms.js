import { createBlock } from '@wordpress/blocks';

const getWidthInPercent = (columnCount, columnSpan) => {
	return (columnSpan / columnCount) * 100;
};

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
					const newWidth = getWidthInPercent(
						attributes.childrenWidthLarge,
						block.attributes.widthLarge !== 0
							? block.attributes.widthLarge
							: 1
					);

					newInnerBlocks.push(
						createBlock(
							'core/column',
							{
								width: newWidth,
							},
							block.innerBlocks
						)
					);
				});

				console.log('innner', newInnerBlocks);
				return createBlock('core/columns', attributes, newInnerBlocks);
			},
		},
	],
};

export default transforms;
