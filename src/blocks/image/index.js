import Edit from './edit';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Image', 'ctx-blocks' ),
	description: __( 'Insert image', 'ctx-blocks' ),
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit: Edit,
	save: () => { return null }
};

export { name, category, metadata, settings };