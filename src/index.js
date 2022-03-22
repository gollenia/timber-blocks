/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */
import * as base from './blocks/base';
import * as buttonGroup from './blocks/buttons/button-group';
import * as buttonSpacer from './blocks/buttons/button-spacer';
import * as button from './blocks/buttons/button';
import * as image from './blocks/image';
import * as alert from './blocks/alert';
import * as card from './blocks/card';
import * as descriptionList from './blocks/description/description-list';
import * as descriptionItem from './blocks/description/description-item';
import * as section from './blocks/section';
import * as nav from './blocks/nav';
import * as posts from './blocks/posts';
import * as progress from './blocks/progress';
//import * as modal from './blocks/modal';
import * as gridRow from './blocks/grid/grid-row';
import * as gridColumn from './blocks/grid/grid-column';

/**
 * Core Block modification dependencies.
 */
import './mods/additionalFonts';
import baseBlockClasses from './mods/baseBlocksClasses';
import './mods/spacerAutoOption';


/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';

const registerBlock = (block) => {
	if (!block) return;
	const { name, settings } = block;
	registerBlockType( name, settings );
};


export const registerBlocks = () => {
	[
		buttonGroup,
		buttonSpacer,
		button,
		alert,
		card,
		base,
		descriptionList,
		descriptionItem,
		section,
		posts,
		nav,
		progress,
		gridRow,
		gridColumn,
		image,
	].forEach(registerBlock);
};

registerBlocks();
