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
				title,
				url,
				urlIcon
			},
			setAttributes,
			className,
		} = props;



        const classes = [
            className,
			"ctx-description--" + contentType,
			"ctx-description__item"
		].filter(Boolean).join(" ");

        

		return (
			<>
				<Inspector
						{ ...props }
				/>
				<div { ...useBlockProps( { className: classes }) } >

					<div class="ctx-description__icon">
			
						{ image && image.subtype != "svg+xml" &&
							<img className={roundImage ? "round" : ""} src={image.sizes.thumbnail.url}/>
						}

						{ image && image.subtype === "svg+xml" &&
							<img 
								src={image.url} 
								width="3rem"
								height="3rem"
							/>
						}

						{ !image && icon !== "" &&
							<i className="material-icons">{icon}</i>
						}
					</div>
					<div className="ctx-description__content">
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
								
							/>
						}
						{ contentType === "date" &&
							<p>{text}</p>
						}
					</div>
					{ url && <div class="ctx-description__action">
						<b><i class="material-icons">{urlIcon}</i></b>
					</div> }
				</div>
			</>
		);
}