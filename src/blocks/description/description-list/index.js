/**
 * External dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';


import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Beschreibungsliste', 'ctxblocks' ),
	description: __( 'Liste mit oder ohne Bilder', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
        __( 'link', 'ctxblocks' ),
        __( 'image', 'ctxblocks' ),
	],
	attributes,
	edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };