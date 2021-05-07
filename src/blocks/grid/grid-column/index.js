import Edit from './edit';
import icons from './icons';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Column', 'ctx-blocks' ),
	description: __( 'Insert a single column', 'ctx-blocks' ),
	parent: [ 'ctx-blocks/grid-row' ],
	icon: icons.column,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	getEditWrapperProps( props ) {
        return {
            'data-width': props.widthLarge || false,
        };
    },
	attributes,
	edit: Edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };