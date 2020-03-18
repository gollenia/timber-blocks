import { registerBlockType } from '@wordpress/blocks';


import * as button from './blocks/button';
import * as alert from './blocks/alert';
import * as card from './blocks/card';


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
		card
	].forEach( registerBlock );
};

registerBlocks();
