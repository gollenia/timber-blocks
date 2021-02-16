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
	title: __( 'Image', 'ctx-blocks' ),
	description: __( 'Insert image', 'ctx-blocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit: compose([withColors('overlayColor')])(edit),
	save: () => { return null }
};

export { name, category, metadata, settings };