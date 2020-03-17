import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

// const {
// 	Component
// } = wp.element;

const settings = {
	/* translators: block name */
	title: __( 'Card', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Card component to hold different Information', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	// Die Farbwerte müssen von außen übergeben werden, damit die Funktion nicht nur die HEX-Codes, sondern
	// auch slug und Farbname erhält. DIese Farben werden im Theme mittels 
	// add_theme_support( 'editor-color-palette', array(...) ); registriert.
	edit: compose([withColors('textColor', 'backgroundColor', 'borderColor')])(edit),
	save
};

export { name, category, metadata, settings };