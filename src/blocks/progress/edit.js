import Inspector from './inspector';
import { useBlockProps, RichText  } from '@wordpress/block-editor';

export default function Edit({...props}) {


		const {
			attributes: {
				percent,
				showValue,
				title
			},
			colorBar,
			colorBackground
		} = props;

		blockProps = useBlockProps({className: "ctx-progress outer", style: {backgroundColor: colorBackground.color}})

		return (
			<>
				<Inspector
						{ ...props }
				/>
				<div {...blockProps}>
					<div style={{width: `${percent}%`, backgroundColor: colorBar.color}} className="inner">
						{ showValue && <span className="value">{percent}%</span> }
					</div>
				</div>
				<RichText
						tagName="span"
						value={ title }
						onChange={ (value) => setAttributes({ title: value }) }
						placeholder={__("Add description here...", 'ctx-blocks')}
						keepPlaceholderOnFocus={true}
					/>
			</>
		);


}