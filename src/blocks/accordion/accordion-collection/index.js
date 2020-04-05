import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Akkordeon', 'ctxblocks' ),
	description: __( 'Strukturierte Informationen übersichtlich darstellen', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };

