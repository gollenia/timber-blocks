/**
 * External dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Beschreibungsliste', 'ctxblocks' ),
	description: __( 'Liste mit oder ohne Bilder', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
        __( 'link', 'ctxblocks' ),
        __( 'image', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};

export { name, category, metadata, settings };