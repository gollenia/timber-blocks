import { InnerBlocks } from '@wordpress/block-editor';

const migrateAttributes = ( attributes ) => {
	console.log( attributes );
	return attributes;
};

const deprecated = [
	{
		attributes: {
			showDate: {
				type: 'boolean',
				default: true,
			},
			showCategory: {
				type: 'boolean',
				default: false,
			},
			showTag: {
				type: 'boolean',
				default: false,
			},
			showAuthor: {
				type: 'boolean',
				default: false,
			},
			styleType: {
				type: 'string',
				default: 'list',
			},
			limit: {
				type: 'number',
				default: 99,
			},
			order: {
				type: 'string',
				default: 'desc',
			},
			orderBy: {
				type: 'string',
				default: 'date',
			},
			category: {
				type: 'string',
				default: '',
			},
			excerptLength: {
				type: 'number',
				default: 20,
			},
			linkAsButton: {
				type: 'boolean',
				default: false,
			},
		},
		migrate: ( attributes ) => {
			console.log( 'migrate' );
			console.log( attributes );
			return attributes;
		},
		isEligible: ( attributes, innerBlocks ) => {
			if ( attributes?.style?.spacing?.margin ) {
				console.log( 'isEligible' );
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
