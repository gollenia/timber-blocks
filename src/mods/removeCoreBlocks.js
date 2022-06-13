import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady(function () {

	const blockNames = [
		'core/button',
		'core/classic',
		'core/image',
	]

	Object.keys( blockNames ).forEach(function( key ){
		const blockName = blockNames[ key ];
		if( blockName && wp.blocks.getBlockType( blockName ) !== undefined ){
			wp.blocks.unregisterBlockType( blockName );
		}
	});
	
});