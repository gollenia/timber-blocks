/**
 * External dependencies
 */


/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import relativeUrl from "../../../common/utils/relurl";

class DescriptionListEdit extends Component {

    render() {

        const {
			attributes,
			setAttributes,
			className,
		} = this.props;

		const {
			content,
			contentType,
			image,
			icon,
			roundImage,
			title
		} = attributes;
		
		

        var classes = [
            className,
			"ctx-description-" + contentType,
			"ctx-description-item"
		].filter(Boolean).join(" ");

      

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>

			
					{ image && image.subtype != "svg+xml" &&
						<img className={roundImage ? "round" : ""} src={image.sizes.qsmall.url}/>
					}

					{ image && image.subtype === "svg+xml" &&
						<img 
							data-src={relativeUrl(image.url)} 
							uk-svg=""
							width="50"
							height="50"
						/>
					}

					{ !image && icon !== "" &&
						<i className={`ctx-icon ctx-icon-${icon}`}></i>
					}
					<div className="ctx-item-content">
						<RichText
							tagName="b"
							value={ title }
							onChange={ (value) => setAttributes({ title: value }) }
							placeholder="Titel eingeben"
						/>
					
						{ contentType !== "date" &&
							<RichText
								tagName="p"
								label={__("Text", 'ctxblocks')}
								value={ content }
								onChange={ (value) => setAttributes({ content: value }) }
								placeholder={__("Beschreibungstext", 'ctxblocks')}
								keepPlaceholderOnFocus={true}
							/>
						}
						{ contentType === "date" &&
							<p>{content}</p>
						}
					</div>
				</div>
			</Fragment>
		);
    };
}

export default DescriptionListEdit;