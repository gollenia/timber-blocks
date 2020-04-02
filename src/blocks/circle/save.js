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
        backgroundImage: image.url !== "" ? `url('${image.sizes.qmedium.url}')` : "none"
    };
		
    return (
        <Fragment>
            { url === "" &&
                <div className={`ctx-circle-wrap ctx-align-${circleAlignment}`}>
                    <div style={style} className={classes}>
                        <div className="ctx-inner">
                            <span className="ctx-satellite ctx-satellite-big"></span>
                            <span className="ctx-satellite ctx-satellite-medium"></span>
                            <span className="ctx-satellite ctx-satellite-small"></span>
                        </div>
                    </div>    
                </div>
            }
            { url !== "" && 
                <a href={url} className={`ctx-circle-wrap ctx-align-${circleAlignment}`}>
                    <div style={style} className={classes}>
                        <div className="ctx-inner">
                            <span className="ctx-satellite ctx-satellite-big"></span>
                            <span className="ctx-satellite ctx-satellite-medium"></span>
                            <span className="ctx-satellite ctx-satellite-small"></span>
                        </div>
                    </div>    
                </a>
            }
            
            
        </Fragment>
    );

}


