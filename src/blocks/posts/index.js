/**
 * Internal dependencies
 */
import Edit from './edit';
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
	description: __( 'Shows a list or cards of Posts', 'ctx-blocks' ),
	icon: icons.posts,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctx-blocks' ),
		__( 'info', 'ctx-blocks' ),
	],
	attributes,
	edit: Edit,
	save() { return null; }
};


export { name, category, metadata, settings };