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
import { withColors } from '@wordpress/block-editor';

const { name } = metadata;

const settings = {
	...metadata,
	icon,
	title: __(metadata.title, "ctx-blocks"),
	edit: withColors({backgroundColor: 'backgroundColor'})(edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings}