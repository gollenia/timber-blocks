import { unregisterBlockType } from '@wordpress/blocks';
const t = 6;
document.addEventListener( 'DOMContentLoaded', function () {
	unregisterBlockType( 'core/columns' );
	unregisterBlockType( 'core/cover' );
	unregisterBlockType( 'core/more' );
	unregisterBlockType( 'core/nextpage' );
} );
