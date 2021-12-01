import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

document.addEventListener('DOMContentLoaded', function () {
    unregisterBlockType('core/columns');
    unregisterBlockType('core/buttons');
    unregisterBlockType('core/classic');
    unregisterBlockType('core/image');
    unregisterBlockType('core/more');
    unregisterBlockType('core/nextpage');
})
