import edit from './edit';
import save from './save';
import icons from './icons';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

// const {
// 	Component
// } = wp.element;

const settings = {
	/* translators: block name */
	title: __( 'Zeile', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	icon: icons.row,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	supports: {
		align: ["full"],
		default: "alignfull"
	},
	attributes,
	// Die Farbwerte müssen von außen übergeben werden, damit die Funktion nicht nur die HEX-Codes, sondern
	// auch slug und Farbname erhält. DIese Farben werden im Theme mittels 
	// add_theme_support( 'editor-color-palette', array(...) ); registriert.
	edit,
	save
};

export { name, category, metadata, settings };