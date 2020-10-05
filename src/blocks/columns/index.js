import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Text-Spalten', 'ctxblocks' ),
	description: __( 'Fließtext wird automatisch auf Spalten aufgeteilt.', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'columns', 'ctxblocks' ),
		__( 'text', 'ctxblocks' ),
	],
	attributes,
	edit,
	save: () => { return (  <InnerBlocks.Content />  ); }
};


export { name, category, metadata, settings };