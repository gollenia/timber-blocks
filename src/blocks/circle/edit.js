/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Toolbar from './toolbar';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';


class CircleEdit extends Component {

    render() {
        const {
            attributes,
            setAttributes,
			className,
            backgroundColor,
            borderColor,
		} = this.props;

		const {
			image,
            size,
            border,
            borderTransparent,
            boxShadow,
            circleAlignment,
            hasSatellites
        } = attributes;

        var classes = classnames(
            className,
            "ctx-circle",
            { "ctx-border": border },
            { "ctx-border-transparent": borderTransparent },
            { "box-shadow": boxShadow},
            { "ctx-satellites": hasSatellites}
        
        )

        var style={
            width: `${size}%`,
            paddingTop: border ? `calc(${size}% - 20px)` : `${size}%`,
            backgroundColor: backgroundColor.color,
            borderColor: borderColor.color,
            backgroundImage: image.url !== "" ? `url('${image.sizes.small.url}')` : "none"
        };
        
        return(
            <Fragment>
                <Inspector {...this.props} />
                <Toolbar {...this.props} />
                <div className={`ctx-circle-wrap ctx-align-${circleAlignment}`}>
                    <div style={style} className={classes}>
                        <div className="ctx-inner">
                            
                        </div>
                    </div>    
                </div>
            </Fragment>
        )
    };
}

export default CircleEdit;