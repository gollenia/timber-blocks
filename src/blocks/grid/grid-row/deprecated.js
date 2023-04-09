import { InnerBlocks } from '@wordpress/block-editor';

const migrateAttributes = ( attributes ) => {
	console.log( attributes );
	return attributes;
};

const deprecated = [
	{
		attributes: {
			equalizer: {
				type: 'boolean',
				default: false,
			},
			divider: {
				type: 'boolean',
				default: false,
			},
			childrenWidthSmall: {
				type: 'integer',
				default: 1,
			},
			childrenWidthMedium: {
				type: 'integer',
				default: 2,
			},
			childrenWidthLarge: {
				type: 'integer',
				default: 3,
			},
		},
		migrate: migrateAttributes,
		isEligible: ( attributes, innerBlocks ) => {
			return true;
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	},
];

export default deprecated;
