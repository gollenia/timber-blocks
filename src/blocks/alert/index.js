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
	/* translators: block name */
	title: __( 'Alarm', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Informations- oder Warnhinweis für den Besucher', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('alertColor')])(edit),
	save
};


export { name, category, metadata, settings };