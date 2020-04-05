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
	title: __( 'Akkordeon Block', 'ctxblocks' ),
	description: __( 'Einzelne Akkordion-Komponente', 'ctxblocks' ),
	parent: [ 'ctx-blocks/accordion-collection' ],
	icon,
	keywords: [
		'ctxblocks',
		__( 'accordion', 'ctxblocks' ),
		__( 'faq', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('itemColor')])(edit),
	save
};

export { name, category, metadata, settings };