import { useBlockProps } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import SVGUrl from '../../common/utils/SVGUrl';
import Inspector from './inspector';

const Edit = (props) => {
	const {
		attributes: { claim },
		setAttributes,
		className,
	} = props;

	const logoUrl = useSelect((select) => {
		const { getMedia, getEntityRecord } = select(coreStore);
		const siteData = getEntityRecord('root', '__unstableBase');
		const _siteLogoId = siteData?.site_logo;

		return getMedia(_siteLogoId, {
			context: 'view',
		});
	}, []);

	const blockProps = useBlockProps({
		className: `ctx-topbar`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className="brand">
					{logoUrl && (
						<SVGUrl size={60} url={logoUrl.source_url}></SVGUrl>
					)}
					<b>{claim}</b>
				</div>
				<div>Menu</div>
			</div>

			<Inspector {...props} />
		</>
	);
};

export default Edit;
