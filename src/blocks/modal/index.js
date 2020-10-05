/**
 * Internal Dependencies
 */
import edit from './edit';
import save from './save';
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
	title: __( 'Modal', 'ctxblocks' ),
	description: __( 'Modal, dass auf Knopfdruck geöffnet werden kann', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	attributes,
	edit,
	save: () => { return (<InnerBlocks.Content />); }
};

export { name, category, metadata, settings };

