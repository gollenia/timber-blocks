/**
 * Internal dependencies
 */
import edit from './edit';
import icons from './icons';
import metadata from './block.json';
import './editor.scss';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { InnerBlocks } from '@wordpress/block-editor';


const { name, title } = metadata;

const settings = {
	...metadata,
	title: __( title, 'ctx-blocks' ),
	icon: icons.column,
	getEditWrapperProps( props ) {
        return {
            'data-width': props.widthLarge || false,
        };
    },
	edit,
	save: () => { return ( <InnerBlocks.Content /> ); }
};

export { name, settings };