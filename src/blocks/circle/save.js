/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';

export default function save( {attributes} ) {

    const {
        image,
        size,
        backgroundColor,
        className,
        borderColor,
        text,
        border,
        boxShadow,
        borderTransparent,
        url,
        circleAlignment,
        hasSatellites
    } = attributes;

    var classes = classnames(
        className,
        "ctx-circle",
        { "ctx-border": border },
        { "ctx-border-transparent": borderTransparent },
        { "box-shadow": boxShadow},
        { "ctx-satellites": hasSatellites},
        "ctx-circle-" + backgroundColor
    )

    var style={
        width: `${size}%`,
        paddingTop: border ? `${size}%` : `${size}%`,
        backgroundColor: backgroundColor.color,
        borderColor: borderColor.color,
        backgroundImage: image.url !== "" ? `url('${image.sizes.medium.url}')` : "none"
    };
		
    return (
        <Fragment>
            <div className={`ctx-circle-wrap ctx-align-${circleAlignment}`}>
                    <div style={style} className={classes}>
                        <div className="ctx-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                            <text style="font: 20px/25px sans-serif; text-align: center; shape-inside: circle(120px at 150px 150px);">{text}</text>
                        </svg>
                        </div>
                    </div>    
                </div>
        </Fragment>
    );

}


