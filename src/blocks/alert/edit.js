/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, RichText} from '@wordpress/block-editor';


export default function AlertEdit({...props}) {

		const {
			attributes: {
				alertText,
				title,
				isDismissable
			},
			setAttributes,
			className,
			alertColor
		} = props;

		var textColor = props.colorUtils.getMostReadableColor(alertColor.color);

		const blockProps = useBlockProps({
			className: `${className} ctx-blocks-alert`,
			style:{background: alertColor.color, color: textColor}
		})

		return (
			<>
				<Inspector
						{ ...props }
				/>
				<div { ...blockProps } >
					{isDismissable &&
						<span type="button" className={"ctx-close"}>
							<span>×</span>
						</span>
					}

					<RichText
						tagName="h3"
						label={__("Title", 'ctx-blocks')}
						value={ title }
						onChange={ (value) => setAttributes({ title: value }) }
						placeholder={__("Alert Title", 'ctx-blocks')}
						keepPlaceholderOnFocus={false}
					/>
					
					<RichText
						tagName="p"
						value={ alertText }
						onChange={ (value) => setAttributes({ alertText: value }) }
						placeholder={__("Type message here...", 'ctx-blocks')}
						keepPlaceholderOnFocus={false}
					/>
					
				</div>
			</>
		);

}