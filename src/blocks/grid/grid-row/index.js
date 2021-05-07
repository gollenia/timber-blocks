import Edit from './edit';
import icons from './icons';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Columns', 'ctx-blocks' ),
	description: __( 'Divide content into multiple columns', 'ctx-blocks' ),
	icon: icons.row,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	supports: {
		align: ["full"],
		default: "alignfull"
	},
	attributes,
	edit: Edit,
	save: () => { return (<InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };