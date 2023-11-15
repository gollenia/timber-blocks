/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import transforms from './transforms';

/**
 * Wordpress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title } = metadata;

const settings = {
	...metadata,
	title: __(title, 'ctx-blocks'),
	icon,
	edit,
	transforms,
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { name, settings };
