import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks} from '@wordpress/block-editor';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Sektion', 'ctxblocks' ),
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	supports: {
		align: ["full"],
		default: "alignfull"
	},
	attributes,
	edit: compose([withColors('backgroundColor')])(edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };