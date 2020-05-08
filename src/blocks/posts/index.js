/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
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
	title: __( 'Posts', 'ctx-blocks' ),
	description: __( 'Zeigt eine Liste von Posts an', 'ctx-blocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctx-blocks' ),
		__( 'info', 'ctx-blocks' ),
	],
	attributes,
	edit,
	save
};


export { name, category, metadata, settings };