/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import './editor.scss';
import icon from './icon';

/**
 * Wordpress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	icon,
	title: __( title, 'ctx-blocks' ),
	description: __( description, 'ctx-blocks' ),
	edit,
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { name, settings };
