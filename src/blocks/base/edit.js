import { __ } from '@wordpress/i18n'; 
import { Inserter, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

export default function Edit({...props}) {

	const {
		clientId
	} = props;
	const blockProps = useBlockProps();
	const template = [['ctx-blocks/section']];
	const allowedBlocks = [ 'ctx-blocks/section' ];

	const innerBlocksProps = useInnerBlocksProps(blockProps, { allowedBlocks, template, templateLock: false, renderAppender: false });

	function SectionAppender( { rootClientId } ) {
		return (
			<Inserter
				rootClientId={ rootClientId }
				renderToggle={ ( { onToggle, disabled } ) => (
					<a className="components-button is-primary" onClick={onToggle}>{__("Add Section", "ctx-blocks")}</a>
				) }
				isAppender
			/>
		);
	}

	return (
		<div className='ctx:base'>
				<div {...innerBlocksProps} className="ctx:base__container">
				</div>
				<div className='ctx:base__appender'>
				<SectionAppender
					rootClientId={clientId} />	
				</div>
				
				
		</div>
	);

}