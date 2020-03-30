import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;
const imageSkeletton = {
	url: "",
	width: 0,
	height: 0,
	alt: "",
	sizes: {
		small: {
			height: 533,
			width: 800,
			url: ""
		}
	}
};

import './editor.scss';
metadata.attributes.image.default = imageSkeletton
const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

// const {
// 	Component
// } = wp.element;

const settings = {
	/* translators: block name */
	title: __( 'Bild', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Fügt ein Bild ein', 'ctxblocks' ),
	icon,
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