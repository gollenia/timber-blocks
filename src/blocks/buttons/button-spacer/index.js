/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import './editor.scss';

/**
  * Wordpress dependencies
  */
import { InnerBlocks} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'; 

const { name, title } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	icon,
	edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings };