/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import './editor.scss';

/**
 * Wordpress dependencies
 */
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;
const { __ } = wp.i18n; 

/**
 * Block Metadata
 */
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
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };