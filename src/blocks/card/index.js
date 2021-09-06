import Edit from './edit';
import icons from './icons';
import metadata from './block.json';
const { withColors } = wp.blockEditor;

import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Card', 'ctx-blocks' ),
	description: __( 'Card component to hold different Information', 'ctx-blocks' ),
	icon: icons.card,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit: withColors({backgroundColor: 'backgroundColor', secondaryColor: 'secondaryColor'})(Edit),
	
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };