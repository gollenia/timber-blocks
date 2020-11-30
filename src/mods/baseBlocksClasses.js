/**
 * Add the "core-block" class to every core block for easier CSS
 */

const setExtraPropsToBlockType = (props, blockType, attributes) => {
    const notDefined = (typeof props.className === 'undefined' || !props.className) ? true : false


    return Object.assign(props, {
        className: notDefined ? `core-block` : `core-block ${props.className}`,
    });
   
};

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'your-namespace/block-filters',
    setExtraPropsToBlockType
);