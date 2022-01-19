import { unregisterBlockType } from '@wordpress/blocks';

document.addEventListener('DOMContentLoaded', function () {
	if (document.unregisterBlockType === undefined) return;
	unregisterBlockType('core/columns');
	unregisterBlockType('core/buttons');
	unregisterBlockType('core/image');
	unregisterBlockType('core/more');
	unregisterBlockType('core/nextpage');
})
