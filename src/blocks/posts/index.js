/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated from './deprecated';
import edit from './edit';
import './editor.scss';
import icons from './icons';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __(title, 'ctx-blocks'),
	description: __(description, 'ctx-blocks'),
	deprecated,
	icon: icons.posts,
	edit,
	save() {
		return null;
	},
};

export { name, settings };
