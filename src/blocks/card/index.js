/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import './editor.scss';
import icons from './icons';
import Save from './save';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __(title, 'ctx-blocks'),
	description: __(description, 'ctx-blocks'),
	icon: icons.card,
	deprecated,
	edit: withColors({
		backgroundColor: 'backgroundColor',
		secondaryColor: 'secondaryColor',
	})(Edit),

	save: Save,
};

export { name, settings };
