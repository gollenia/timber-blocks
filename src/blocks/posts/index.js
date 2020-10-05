/**
 * Internal dependencies
 */
import edit from './edit';
import icons from './icons';
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
	title: __( 'Posts', 'ctx-blocks' ),
	description: __( 'Zeigt eine Liste von Posts an', 'ctx-blocks' ),
	icon: icons.posts,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctx-blocks' ),
		__( 'info', 'ctx-blocks' ),
	],
	attributes,
	edit,
	save() { return null; }
};


export { name, category, metadata, settings };