import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Listenelement', 'ctxblocks' ),
	description: __( 'Einzelne Akkordion-Komponente', 'ctxblocks' ),
	parent: [ 'ctx-blocks/description-list' ],
	icon,
	keywords: [
		'ctxblocks',
		__( 'description', 'ctxblocks' ),
		__( 'list', 'ctxblocks' ),
	],
	attributes,
	edit,
	save: () => { return null }
};

export { name, category, metadata, settings };