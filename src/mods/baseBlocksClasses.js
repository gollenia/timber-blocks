const { addFilter } = wp.hooks;

const setExtraPropsToBlockType = (props, blockType, attributes) => {
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false
    return Object.assign(props, {
        className: notDefined ? `core-block` : `core-block ${props.className}`,
    });
};

addFilter( 'blocks.registerBlockType', 'ctx-blocks/core-visibility', setExtraPropsToBlockType );