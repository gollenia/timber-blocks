const { addFilter } = wp.hooks;

const setExtraPropsToBlockType = (props, blockType, attributes) => {
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false
	
    let obj = Object.assign(props, {
        className: notDefined ? `core-block` : `core-block ${props.className}`,
    });
	return obj;

};

addFilter( 'blocks.registerBlockType', 'ctx-blocks/core-class', setExtraPropsToBlockType );
addFilter( 'blocks.getSaveContent.extraProps', 'ctx-blocks/core-class', setExtraPropsToBlockType );