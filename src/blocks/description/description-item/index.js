import Edit from './edit';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'List item', 'ctx-blocks' ),
	description: __( 'single list item', 'ctx-blocks' ),
	parent: [ 'ctx-blocks/description-list' ],
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'description', 'ctx-blocks' ),
		__( 'list', 'ctx-blocks' ),
	],
	attributes,
	edit: Edit,
	save: () => { return null }
};

export { name, category, metadata, settings };