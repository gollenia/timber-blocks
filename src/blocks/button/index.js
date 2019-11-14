import edit from './edit';
import icon from './icon';
import metadata from './block.json';

import './style.scss';

const { __ } = wp.i18n; 
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'Button', 'ctxblocks' ),
	/* translators: block description */
	description: __( 'Button which contains a link', 'ctxblocks' ),
	icon,
	keywords: [
		'ctxblocks',
		/* translators: block keyword */
		__( 'url', 'ctxblocks' ),
		/* translators: block keyword (abbreviation for "frequently asked questions") */
		__( 'link', 'ctxblocks' ),
	],
	attributes,
	edit,
	save: ( props ) => {
		const {
			attributes,
			className
		} = props;
		return (
			<div>
				<a class={"btn " + attributes.size + " btn" + (attributes.outline ? "-outline" : "") + attributes.style} href={attributes.url}>{ attributes.title }</a>
			</div>
		);
	},
};


export { name, category, metadata, settings };