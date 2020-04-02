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
			title
		} = attributes;
		
		

        var classes = classnames(
            className,
            "ctx-description-" + contentType
        )

      

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div className={classes}>
				<TextControl
                            value={ title }
							onChange={ (title) => setAttributes({ title }) }
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
			</Fragment>
		);
    };
}

export default DescriptionListEdit;