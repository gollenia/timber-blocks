/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */
import * as alert from './blocks/alert';
//import * as base from './blocks/base';
import * as button from './blocks/buttons/button';
import * as buttonGroup from './blocks/buttons/button-group';
import * as buttonSpacer from './blocks/buttons/button-spacer';
import * as card from './blocks/card';
import * as conditional from './blocks/conditional';
//import * as cover from './blocks/cover';
import * as descriptionItem from './blocks/description/description-item';
import * as descriptionList from './blocks/description/description-list';
import * as footer from './blocks/footer';
import * as header from './blocks/header/header';
import * as headerContent from './blocks/header/header-content';
import * as image from './blocks/image';
import * as nav from './blocks/nav';
import * as posts from './blocks/posts';
import * as progress from './blocks/progress';
import * as section from './blocks/section';
import * as inlineSvg from './blocks/svg';
import * as topbar from './blocks/topbar';
//import * as modal from './blocks/modal';
import * as gridColumn from './blocks/grid/grid-column';
import * as gridRow from './blocks/grid/grid-row';

/**
 * Core Block modification dependencies.
 */
import './mods/featuredImageProps';
import './mods/paragraphJustify';
import './mods/postTitleProps';
import './mods/spacerAutoOption';

/**
 * Stylesheets
 */
import './common/styles/editor.scss';
import './common/styles/style.scss';

type Block = {
	name: string;
	settings: {
		name: string;
		title: string;
		description: string;
		icon: any;
		edit: any;
		save: any;
	};
};

const registerBlock = ( block: Block ) => {
	if ( ! block ) return;
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
		descriptionList,
		descriptionItem,
		conditional,
		section,
		footer,
		posts,
		inlineSvg,
		header,
		headerContent,
		nav,
		progress,
		gridRow,
		topbar,
		gridColumn,
		image,
	].forEach( registerBlock );
};

registerBlocks();
