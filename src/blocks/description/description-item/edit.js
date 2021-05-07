/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText} from '@wordpress/block-editor';
import relativeUrl from "../../../common/utils/relurl";

export default function Edit({...props}) {
        const {
			attributes: {
				text,
				contentType,
				image,
				icon,
				roundImage,
				title
			},
			setAttributes,
			className,
		} = props;



        var classes = [
            className,
			"ctx-description-" + contentType,
			"ctx-description-item"
		].filter(Boolean).join(" ");

        

		return (
			<>
				<Inspector
						{ ...props }
				/>
				<div { ...useBlockProps( { className: classes }) } >

			
					{ image && image.subtype != "svg+xml" &&
						<img className={roundImage ? "round" : ""} src={image.sizes.qsmall.url}/>
					}

					{ image && image.subtype === "svg+xml" &&
						<img 
							src={relativeUrl(image.url)} 
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
							placeholder={__("Title", 'ctx-blocks')}
						/>
					
						{ contentType !== "date" &&
							<RichText
								tagName="p"
								label={__("Text", 'ctx-blocks')}
								value={ text }
								onChange={ (value) => setAttributes({ text: value }) }
								placeholder={__("Description", 'ctx-blocks')}
								keepPlaceholderOnFocus={true}
							/>
						}
						{ contentType === "date" &&
							<p>{text}</p>
						}
					</div>
				</div>
			</>
		);
}