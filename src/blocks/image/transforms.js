import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/image'],
			transform: (attributes, innerBlocks) => {
				attributes.id = attributes.image.id;
				attributes.href = attributes.url;
				attributes.url = attributes.image.url;
				attributes.alt = attributes.image.alt;
				attributes.title = attributes.image.title;

				attributes.width = attributes.width + '%';

				attributes.image = undefined;

				return createBlock('core/image', attributes, innerBlocks);
			},
		},
	],
};

export default transforms;
