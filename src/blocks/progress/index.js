/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import save from './save';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';

const { name, title, description } = metadata;

const settings = {
	icon,
	edit: withColors({
		colorBar: 'colorBar',
		colorBackground: 'colorBackground',
	})(edit),
	save,
};

export { name, settings };
