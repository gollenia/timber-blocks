/**
 * Internal dependencies
 */
import Inspector from './inspector';
/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n'; 
import { useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

export default function edit({...props}) {

	const {
		clientId
	} = props;
	const blockProps = useBlockProps();
	const template = [['ctx-blocks/section']];
	const allowedBlocks = [ 'ctx-blocks/section' ];

	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<div className='ctx:conditional'>
			<Inspector {...props} />
			<div {...innerBlocksProps} className="ctx:base__container"></div>		
		</div>
	);

}