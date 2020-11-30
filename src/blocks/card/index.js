import edit from './edit';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;
import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Card', 'ctxblocks' ),
	description: __( 'Card component to hold different Information', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('textColor', 'backgroundColor', 'borderColor')])(edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };