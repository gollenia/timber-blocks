/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';

/**
 * Wordpress dependencies
 */
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Alarm', 'ctx-blocks' ),
	description: __( 'Informations- oder Warnhinweis für den Besucher. Die Überschrift ist optional.', 'ctx-blocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctx-blocks' ),
		__( 'info', 'ctx-blocks' ),
	],
	attributes,
	edit: compose([withColors('alertColor')])(edit),
	save: () => { return null; }
};


export { name, category, metadata, settings };