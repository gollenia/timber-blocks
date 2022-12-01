// <reference types="react-scripts" />
declare module '@wordpress/block-editor';
declare module '@wordpress/components';
declare module '@wordpress/blocks';
declare module '@wordpress/core-data';

type BlockSettings = {
	title: string;
	icon: any;
	description: string;
	edit: () => any;
	save: () => any;
};
