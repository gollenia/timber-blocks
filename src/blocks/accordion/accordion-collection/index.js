/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './editor.scss';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; 

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Akkordeon', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Strukturierte Informationen übersichtlich darstellen', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };

