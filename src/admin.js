import { unregisterBlockType } from '@wordpress/blocks';

document.addEventListener('DOMContentLoaded', function () {
	unregisterBlockType('core/columns');
	unregisterBlockType('core/buttons');
	unregisterBlockType('core/image');
	unregisterBlockType('core/more');
	unregisterBlockType('core/nextpage');
})
