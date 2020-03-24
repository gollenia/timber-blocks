import { registerBlockType } from '@wordpress/blocks';


import * as button from './blocks/button';
import * as alert from './blocks/alert';
import * as card from './blocks/card';
import * as accordionCollection from './blocks/accordion/accordion-collection';
import * as accordionItem from './blocks/accordion/accordion-item';
import * as section from './blocks/section';


const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, category, settings } = block;

	registerBlockType( name, {
		category: category,
		...settings,
	} );
};

export const registerBlocks = () => {
	[
		button,
		alert,
		card,
		accordionCollection,
		accordionItem,
		section
	].forEach( registerBlock );
};

registerBlocks();
