/**
 * Internal dependencies
 */
import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import './editor.scss';
import icon from './icon';

/**
 * Wordpress dependencies
 */
import { InnerBlocks, withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	description: __( description, 'ctx-blocks' ),
	icon,
	deprecated,
	edit: withColors( { buttonColor: 'buttonColor' } )( Edit ),
	save: () => {
		return <InnerBlocks.Content />;
	},
};

export { settings, name };
