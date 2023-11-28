/**
 * Internal dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import './editor.scss';
import icon from './icon';
import './style.scss';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';

const { name, title, description } = metadata;

const settings = {
	icon,
	deprecated,
	edit: withColors({ buttonColor: 'buttonColor' })(Edit),
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { name, settings };
