import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { url } = attributes;

	return <div { ...useBlockProps.save() }>bimbi</div>;
}
