import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
import { InnerBlocks} from '@wordpress/block-editor';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Section', 'ctx-blocks' ),
	description: __( 'Inserts a basic container element, maximizing its content\'s width.', 'ctx-blocks' ),
	icon,
	apiVersion: 2,
	keywords: [
		'ctxblocks',
		__( 'url', 'ctx-blocks' ),
		__( 'link', 'ctx-blocks' ),
	],
	supports: {
		align: ["full"],
		default: "alignfull"
	},
	attributes,
	edit: compose([withColors('backgroundColor')])(Edit),
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, category, metadata, settings };