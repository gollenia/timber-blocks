/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import save from './save';
import transforms from './transforms';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';

const { name, title, description } = metadata;

const settings = {
	icon,

	edit: withColors({ backgroundColor: 'backgroundColor' })(edit),
	transforms,
	save,
};

export { name, settings };
