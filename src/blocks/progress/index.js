import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Fortschrittsbalken', 'ctxblocks' ),
	description: __( 'Zeigt an, wie viel von einem bestimmten Wert bereits erreicht ist.', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'progress', 'ctxblocks' ),
		__( 'value', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};


export { name, category, metadata, settings };