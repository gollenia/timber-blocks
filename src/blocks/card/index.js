/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import './editor.scss';
import icon from './icon';
import Save from './save';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';

const { name, title, description } = metadata;

const settings = {
	icon: icon,
	deprecated,
	edit: withColors({
		backgroundColor: 'backgroundColor',
		secondaryColor: 'secondaryColor',
	})(Edit),

	save: Save,
};

export { name, settings };
