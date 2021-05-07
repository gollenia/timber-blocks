/**
 * Internal Dependencies
 */
import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './editor.scss';

/**
 * Wordpress Dependencies
 */
const { __ } = wp.i18n; 

/**
 * Block Constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Modal', 'ctx-blocks' ),
	description: __( 'Window to be displayed on button press', 'ctx-blocks' ),
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit: Edit,
	save: () => { return (<InnerBlocks.Content />); }
};

export { name, category, metadata, settings };

