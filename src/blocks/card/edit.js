import Inspector from './inspector';

import { __ } from '@wordpress/i18n'; 
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks} from '@wordpress/block-editor';

export default class CardEdit extends Component {

	// React benötigt für das Styling ein Objekt, keinen String.
	createStyle() {
		const {
			backgroundColor,
			textColor
		} = this.props;
		
		return {background: backgroundColor.color, color: textColor.color};
	}

	render() {
		const {
			attributes,
			className
		} = this.props;

		const {
			imagePosition,
			textAlign,
			image
		} = attributes;

		const TEMPLATE = [
			[
				'core/heading', 
				{
					placeholder: 'Titel',
					className: 'uk-card-title'
				}
			],
			[
				'core/paragraph',
				{
					placeholder: 'Beschreibung oder Inhalts',
					className: 'card-text'
				}
			]
		];

		var style = this.createStyle();

		return (
			<Fragment>
				<Inspector
						{ ...this.props }
				/>
				<div style={style} className={"ctx-card " + textAlign + " " + className}>
					{imagePosition === "top" && image !== "" &&
						<img className="card-img-top" src={image} alt="Card image cap"/>
					}
					<InnerBlocks 
						allowedBlocks={['core/paragraph', 'core/heading', 'core/list', 'core/button', 'core/coverImage']}
						template={TEMPLATE}
					/>
					{imagePosition === "bottom" && image !== "" &&
						<img class="card-img-bottom" src={image} alt="Card image cap"/>
					}
				</div>
				
			</Fragment>
		);
	};

}