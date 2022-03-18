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
import { InnerBlocks} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'; 

const { name } = metadata;

const settings = {
	...metadata,
	icon,
	title: __(metadata.title, "ctx-blocks"),
	edit: Edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings}