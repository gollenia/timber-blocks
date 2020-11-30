import edit from './edit';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;


import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Bild', 'ctxblocks' ),
	description: __( 'Fügt ein Bild ein', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('overlayColor')])(edit),
	save: () => { return null }
};

export { name, category, metadata, settings };