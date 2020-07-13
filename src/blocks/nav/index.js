/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; 

import './style.scss';
import './editor.scss';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Navigation', 'ctx-blocks' ),
	description: __( 'Zeigt eine Liste von Kategorien oder Seiten an', 'ctx-blocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'pages', 'ctx-blocks' ),
		__( 'navigation', 'ctx-blocks' ),
		__( 'categories', 'ctx-blocks' ),
	],
	attributes,
	edit,
	save() { return null; }
};


export { name, category, metadata, settings };