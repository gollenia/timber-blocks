import { InnerBlocks } from '@wordpress/block-editor';

const migrateAttributes = ( attributes ) => {
	console.log( attributes );

	console.log( 'migrating (shouldn`t happen)', attributes );
	attributes.imageUrl = attributes.image?.url ?? '';
	attributes.imageId = attributes.image?.id ?? 0;

	delete attributes.image;
	delete attributes.imageRound;
	delete attributes.imageWidth;
	delete attributes.imageBorder;
	delete attributes.isFirst;
	delete attributes.isLast;
	return attributes;
};

const deprecated = [
	{
		attributes: {
			secondaryColor: {
				type: 'string',
				default: '',
			},
			customSecondaryColor: {
				type: 'string',
				default: '',
			},
			backgroundColor: {
				type: 'string',
				default: '',
			},
			customBackgroundColor: {
				type: 'string',
				default: '',
			},
			shadow: {
				type: 'boolean',
				default: true,
			},
			focalPoint: {
				type: 'object',
			},
			url: {
				type: 'string',
				default: '',
			},
			hover: {
				type: 'boolean',
				default: false,
			},
			textAlign: {
				type: 'string',
				default: 'left',
			},
			imageUrl: {
				type: 'string',
				default: '',
			},
			imageAlt: {
				type: 'string',
				default: '',
			},
			imageId: {
				type: 'number',
				default: 0,
			},
			imagePosition: {
				type: 'string',
				default: 'top',
			},
			label: {
				type: 'string',
				default: '',
			},
			badge: {
				type: 'string',
				default: '',
			},
			anchor: {
				type: 'string',
			},
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	},
	{
		attributes: {
			backgroundColor: {
				type: 'string',
				default: 'white',
			},
			secondaryColor: {
				type: 'string',
				default: '',
			},
			customBackgroundColor: {
				type: 'string',
				default: '',
			},
			customSecondaryColor: {
				type: 'string',
				default: '',
			},
			transparent: {
				type: 'boolean',
				default: false,
			},
			shadow: {
				type: 'boolean',
				default: true,
			},
			url: {
				type: 'string',
				default: '',
			},
			hover: {
				type: 'boolean',
				default: false,
			},
			textAlign: {
				type: 'string',
				default: 'left',
			},
			image: {
				type: 'Object',
				default: {},
			},
			imageRound: {
				type: 'boolean',
				default: false,
			},
			imageWidth: {
				type: 'integer',
				default: 100,
			},
			imageBorder: {
				type: 'boolean',
				default: false,
			},
			imagePosition: {
				type: 'string',
				default: 'top',
			},
			isFirst: {
				type: 'boolean',
				default: false,
			},
			isLast: {
				type: 'boolean',
				default: false,
			},
			label: {
				type: 'string',
				default: '',
			},
			badge: {
				type: 'string',
				default: '',
			},
			actions: {
				type: 'array',
				default: [],
			},
		},
		migrate: migrateAttributes,
		isEligible: ( attributes, innerBlocks ) => {
			console.log( attributes );
			if ( attributes.image && typeof attributes.image !== 'string' ) {
				console.log( 'is eligible' );
				return true;
			}
			return false;
		},
		save: () => {
			return <InnerBlocks.Content />;
		},
	},
];

export default deprecated;
