import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Akkordeon', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Strukturierte Informationen übersichtlich darstellen', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save
};


export { name, category, metadata, settings };

