import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/image'],
			transform: (attributes) => {
				attributes.id = attributes.image.id;
				attributes.href = attributes.url;
				attributes.url = attributes.image.url;
				attributes.alt = attributes.image.alt;
				attributes.title = attributes.image.title;

				attributes.width = attributes.width + '%';

				return createBlock('core/image', attributes);
			},
		},
	],
};

export default transforms;
