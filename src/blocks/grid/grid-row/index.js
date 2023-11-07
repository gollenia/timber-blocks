import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icons from './icons';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __(title, 'ctx-blocks'),
	description: __(description, 'ctx-blocks'),
	icon: icons.row,
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { name, settings };
