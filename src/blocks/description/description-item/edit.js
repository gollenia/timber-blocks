/**
 * External dependencies
 */
import classnames from 'classnames';

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
		
		

        var classes = classnames(
            className,
			"ctx-description-" + contentType,
			"ctx-description-item"
        )

      

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>
					{ image && 
						<img className={roundImage ? "round" : ""} src={image.sizes.qsmall.url}/>
					}
					{ !image && icon !== "" &&
						<i className={`ctx-icon ${icon}-icon`}></i>
					}
					<div className="ctx-item-content">
						<TextControl
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
								placeholder={__("Nachricht hier einfügen", 'ctxblocks')}
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