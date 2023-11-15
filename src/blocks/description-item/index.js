/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import save from './save';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __(title, 'ctx-blocks'),
	description: __(description, 'ctx-blocks'),
	icon,
	edit,
	save,
};

export { name, settings };
