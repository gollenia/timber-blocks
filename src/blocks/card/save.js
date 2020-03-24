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
		
		if(url==="") {
			return (
				<Fragment>
					<div className={classes}>
						{imagePosition == "top" &&
							<div className="uk-card-media-top">
								<img src={image}/>
							</div>
						}
						<div class="uk-card-body">
							<InnerBlocks.Content />
						</div>
						{imagePosition == "bottom" &&
							<div className="uk-card-media-bottom">
								<img src={image}/>
							</div>
						}
					</div>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<a href={url} className={classes}>
					{imagePosition == "top" &&
						<div className="uk-card-media-top">
							<img src={image}/>
						</div>
					}
					<div class="uk-card-body">
						<InnerBlocks.Content />
					</div>
					{imagePosition == "bottom" &&
						<div className="uk-card-media-bottom">
							<img src={image}/>
						</div>
					}
				</a>
			</Fragment>
		);

}


