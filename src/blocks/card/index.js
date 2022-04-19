/**
 * Internal dependencies
 */
import Edit from './edit';
import icons from './icons';
import metadata from './block.json';
import './editor.scss';

/**
 * Wordpress dependencies
 */
import { withColors, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'; 

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	description: __( description, 'ctx-blocks' ),
	icon: icons.card,
	edit: withColors({backgroundColor: 'backgroundColor', secondaryColor: 'secondaryColor'})(Edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings };