import edit from './edit';
import icon from './icon';
import metadata from './block.json';
const { withColors } = wp.blockEditor;
const { compose } = wp.compose;

import './editor.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Fortschrittsbalken', 'ctxblocks' ),
	description: __( 'Zeigt an, wie viel von einem bestimmten Wert bereits erreicht ist.', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		__( 'progress', 'ctxblocks' ),
		__( 'value', 'ctxblocks' ),
	],
	attributes,
	edit: compose([withColors('colorBar', 'colorBackground')])(edit),
	save: () => { return null; }
};


export { name, category, metadata, settings };