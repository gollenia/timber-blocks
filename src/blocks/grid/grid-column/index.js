import edit from './edit';
import icons from './icons';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Spalte', 'ctxblocks' ),
	description: __( 'Fügt einen Inhaltsblock ein', 'ctxblocks' ),
	parent: [ 'ctx-blocks/grid-row' ],
	icon: icons.column,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctxblocks' ),
		__( 'link', 'ctxblocks' ),
	],
	getEditWrapperProps( props ) {
        return {
            'data-width': props.widthLarge || false,
        };
    },
	attributes,
	edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };