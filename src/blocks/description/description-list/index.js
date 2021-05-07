/**
 * External dependencies
 */
import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Description list', 'ctx-blocks' ),
	description: __( 'List of items', 'ctx-blocks' ),
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
        __( 'link', 'ctx-blocks' ),
        __( 'image', 'ctx-blocks' ),
	],
	attributes,
	edit: Edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };