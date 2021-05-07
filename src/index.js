/**
 * Wordpress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */
import * as button from './blocks/button';
import * as image from './blocks/image';
import * as alert from './blocks/alert';
import * as card from './blocks/card';
import * as descriptionList from './blocks/description/description-list';
import * as descriptionItem from './blocks/description/description-item';
import * as section from './blocks/section';
import * as nav from './blocks/nav';
//columns have been removed
//import * as columns from './blocks/columns';
import * as posts from './blocks/posts';
import * as progress from './blocks/progress';
import * as modal from './blocks/modal';
import * as gridRow from './blocks/grid/grid-row';
import * as gridColumn from './blocks/grid/grid-column';

/**
 * Core Block modification dependencies.
 */
import './mods/additionalFonts';
import './mods/mobileVisibility';
import './mods/baseBlocksClasses';

/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';


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
		descriptionList,
		descriptionItem,
		section,
		posts,
		modal,
		nav,
		progress,
		gridRow,
		gridColumn,
		image
	].forEach( registerBlock );
};

registerBlocks();