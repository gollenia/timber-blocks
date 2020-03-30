/**
 * External dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Kreis', 'ctxblocks' ),
	description: __( 'Kreis für Portrais, Icons oder als Link mit Text', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
        __( 'link', 'ctxblocks' ),
        __( 'image', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('backgroundColor', 'borderColor')])(edit),
	save
};

export { name, category, metadata, settings };