/**
 * Internal dependencies
 */
import Edit from './edit';
import icon from './icon';
import metadata from './block.json';

/**
 * Wordpress dependencies
 */
const { withColors } = wp.blockEditor;


import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 

/**
 * Block constants
 */
const { name, category, attributes, api_version } = metadata;

const settings = {
	title: __( 'Alert', 'ctx-blocks' ),
	description: __( 'Show an information or warning to the user', 'ctx-blocks' ),
	icon,
	apiVersion: api_version,
	keywords: [
		'ctxblocks',
		__( 'alert', 'ctx-blocks' ),
		__( 'info', 'ctx-blocks' ),
	],
	attributes,
	edit: withColors({alertColor: 'alertColor'})(Edit),
	save: () => { return null; }
};


export { name, category, metadata, settings };