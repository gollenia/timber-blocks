/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */
import * as button from './blocks/button';
import * as buttonGroup from './blocks/button/button-group';
import * as card from './blocks/card';
import * as conditional from './blocks/conditional';
import * as descriptionItem from './blocks/description-item';
import * as descriptionList from './blocks/description-list';
import * as gridColumn from './blocks/grid-column';
import * as gridRow from './blocks/grid-row';
import * as progress from './blocks/progress';
import * as inlineSvg from './blocks/svg';

/**
 * Core Block modification dependencies.
 */
import './mods/featuredImageProps';
import './mods/paragraphJustify';
import './mods/postTitleProps';
import './mods/scrollAnimation';
import './mods/spacerAutoOption';

/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';

const registerBlock = (block) => {
	if (!block) return;
	const { name, settings } = block;
	registerBlockType(name, settings);
};

export const registerBlocks = () => {
	[
		buttonGroup,
		button,
		card,
		descriptionList,
		descriptionItem,
		conditional,
		inlineSvg,
		progress,
		gridRow,
		gridColumn,
	].forEach(registerBlock);
};

registerBlocks();
