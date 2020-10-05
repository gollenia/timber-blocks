import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Button', 'ctxblocks' ),
	description: __( 'Button, der einen link enthält', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('buttonColor')])(edit),
	save() { return null; }
};


export { name, category, metadata, settings };

