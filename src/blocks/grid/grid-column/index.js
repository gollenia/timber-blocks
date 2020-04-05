import edit from './edit';
import save from './save';
import icons from './icons';
import metadata from './block.json';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Spalte', 'ctxblocks' ),
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	parent: [ 'ctx-blocks/grid-row' ],
	icon: icons.column,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };