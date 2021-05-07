import Edit from './edit';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Progress Bar', 'ctx-blocks' ),
	description: __( 'Shows a progress bar with a percentual value', 'ctx-blocks' ),
	apiVersion: 2,
	icon,
	keywords: [
		'ctxblocks',
		__( 'progress', 'ctx-blocks' ),
		__( 'value', 'ctx-blocks' ),
	],
	attributes,
	edit: compose([withColors('colorBar', 'colorBackground')])(Edit),
	save: () => { return null; }
};


export { name, category, metadata, settings };