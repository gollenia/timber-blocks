import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Button', 'ctx-blocks' ),
	description: __( 'Contains a link or a function', 'ctx-blocks' ),
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit: withColors({buttonColor: 'buttonColor'})(Edit),
	save() { return null; }
};


export { name, category, metadata, settings };

