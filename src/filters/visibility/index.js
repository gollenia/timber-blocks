import edit from './edit';
import attributes from './attributes.json';
import classnames from 'classnames';

const { addFilter } = wp.hooks; 

function addAttributes( settings ) {
	
	//check if object exists for old Gutenberg version compatibility
	if( typeof settings.attributes !== 'undefined' ){
	
		settings.attributes = Object.assign( settings.attributes, {
			hideMobile: {
                type: "boolean",
                default: false
            },
            hideDesktop: {
                type: "boolean",
                default: false
            }
		});
    
	}

	return settings;
}

function applyExtraClass( extraProps, blockType, attributes ) {

	const { 
        hideMobile ,
        hideDesktop
    } = attributes;
	
	//check if attribute exists for old Gutenberg version compatibility
	//add class only when visibleOnMobile = false
	if ( hideMobile ) {
		extraProps.className = classnames( extraProps.className, '.d-none .d-sm-block .d-md-none' );
    }

    if ( hideDesktop ) {
		extraProps.className = classnames( extraProps.className, '.d-sm-none .d-md-block' );
    }
    


	return extraProps;
}

addFilter(
	'blocks.registerBlockType',
	'editorskit/custom-attributes',
	attributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/custom-advanced-control',
	edit.blockEdit
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);