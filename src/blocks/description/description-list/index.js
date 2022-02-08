/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { InnerBlocks } from '@wordpress/block-editor';

const { name, title } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	icon,
	edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings };