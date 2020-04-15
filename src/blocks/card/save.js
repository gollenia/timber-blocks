import relativeUrl from "../../common/utils/relurl"

import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			backgroundColor,
			textAlign,
			className,
			url,
			hover,
			imagePosition,
			image,
		} = attributes;

		var classes = [
			className || false,
			"uk-card",
			hover ? "uk-card-hover" : false,
			`uk-card-${backgroundColor}`,
			`uk-text-${textAlign}`
		].filter(Boolean).join(" ");

		var srcset = "";

		if (image) {
			 srcset = [
				image.sizes.xsmall !== undefined ? relativeUrl(image.sizes.xsmall.url) + " 350w" : "",
				image.sizes.small !== undefined ? relativeUrl(image.sizes.small.url) + " 500w" : "",
				image.sizes.medium !== undefined ? relativeUrl(image.sizes.medium.url) + " 720w" : "",
				image.sizes.large !== undefined ? relativeUrl(image.sizes.large.url) + " 1300w" : "",
				image.sizes.fullhd !== undefined ? relativeUrl(image.sizes.fullhd.url) + " 1920w" : "",
				image.sizes.wqhd !== undefined ? relativeUrl(image.sizes.wqhd.url) + " 2560w" : ""
			].join(", ");
		}
		
		if(url==="") {
			return (
				<div className={classes}>
					{imagePosition == "top" && image &&
						<div className="uk-card-media-top">
							<img 
								src={relativeUrl(image.url)}
								srcset={srcset}
								sizes="(max-width: 750px) 95vw, (max-width: 1200px) 46vw, 30vw"
							/>
						</div>
					}
					<div class="uk-card-body">
						<InnerBlocks.Content />
					</div>
					{imagePosition == "bottom" && image &&
						<div className="uk-card-media-bottom">
							<img 
								src={relativeUrl(image.url)}
								srcset={srcset}
								sizes="(max-width: 750px) 1300px, (max-width: 1200px) 720px, 500px"
							/>
						</div>
					}
				</div>
			);
		}
		return (
			<a href={url} className={classes}>
				{imagePosition == "top" && image &&
					<div className="uk-card-media-top">
						<img 
							src={image.url}
							srcset={srcset}
							sizes="(max-width: 750px) 95vw, (max-width: 1200px) 46vw, 30vw"
						/>
					</div>
				}
				<div class="uk-card-body">
					<InnerBlocks.Content />
				</div>
				{imagePosition == "bottom" && image &&
					<div className="uk-card-media-bottom">
						<img 
							src={image.url}
							srcset={srcset}
							sizes="(max-width: 750px) 95vw, (max-width: 1200px) 46vw, 30vw"
						/>
					</div>
				}
			</a>
		);

}


