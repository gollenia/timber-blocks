/**
 * Internal dependencies
 */
import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
import './editor.scss';

/**
  * Wordpress dependencies
  */
import { InnerBlocks } from '@wordpress/block-editor';
import { withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'; 



const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	description: __( description, 'ctx-blocks' ),
	icon,
	edit: withColors({buttonColor: 'buttonColor'})(Edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { settings, name}