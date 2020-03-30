import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default function save( {attributes} ) {

		const {
			textColor,
			borderColor,
			backgroundColor,
			textAlign,
			className,
			url,
			hover,
			imagePosition,
			image,
		} = attributes;

		var classes = [
			className || '',
			"uk-card",
			hover ? "uk-card-hover" : "",
			"uk-card-" + backgroundColor,
			textAlign
		].join(" ")

		var srcset = "";
		if (image.url !== "") {
			 srcset = [
				image.sizes.xsmall !== undefined ? image.sizes.xsmall.url + " 350w" : "",
				image.sizes.small !== undefined ? image.sizes.small.url + " 500w" : "",
				image.sizes.medium !== undefined ? image.sizes.medium.url + " 720w" : "",
				image.sizes.large !== undefined ? image.sizes.large.url + " 1300w" : "",
				image.sizes.fullhd !== undefined ? image.sizes.fullhd.url + " 1920w" : "",
				image.sizes.wqhd !== undefined ? image.sizes.wqhd.url + " 2560w" : ""
			].join(", ");
		}
		
		if(url==="") {
			return (
				<Fragment>
					<div className={classes}>
						{imagePosition == "top" && image.url !== "" &&
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
						{imagePosition == "bottom" && image.url !== "" &&
							<div className="uk-card-media-bottom">
								<img 
									src={image.url}
									srcset={srcset}
									sizes="(max-width: 750px) 1300px, (max-width: 1200px) 720px, 500px"
								/>
							</div>
						}
					</div>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<a href={url} className={classes}>
					{imagePosition == "top" && image.url !== "" &&
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
					{imagePosition == "bottom" && image.url !== "" &&
						<div className="uk-card-media-bottom">
							<img 
								src={image.url}
								srcset={srcset}
								sizes="(max-width: 750px) 95vw, (max-width: 1200px) 46vw, 30vw"
							/>
						</div>
					}
				</a>
			</Fragment>
		);

}


