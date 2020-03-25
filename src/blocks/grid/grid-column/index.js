import edit from './edit';
import save from './save';
import icons from './icons';
import metadata from './block.json';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Spalte', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	icon: icons.column,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };