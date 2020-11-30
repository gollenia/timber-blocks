import edit from './edit';
import icons from './icons';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Spalten', 'ctxblocks' ),
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	icon: icons.row,
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
	edit,
	save: () => { return (<InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };