import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/image'],
			transform: (attributes) => {
				attributes.id = attributes.imageId;
				attributes.href = attributes.url;
				attributes.url = attributes.imageUrl;
				attributes.alt = attributes.imageAlt;
				attributes.title = attributes.caption;

				attributes.width = attributes.width;

				return createBlock('core/image', attributes);
			},
		},
	],
};

export default transforms;
