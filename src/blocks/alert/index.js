import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Alarm', 'ctxblocks' ),
	description: __( 'Informations- oder Warnhinweis für den Besucher. Die Überschrift ist optional.', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctxblocks' ),
		__( 'info', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('alertColor')])(edit),
	save
};


export { name, category, metadata, settings };