import { useBlockProps } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import SVGUrl from '../../common/utils/SVGUrl';
import Inspector from './inspector';

type Props = {
	className: string;
	setAttributes: any;
	primaryColor: any;
	attributes: any;
};

const Edit = ( props: Props ) => {
	const {
		attributes: { claim },
		setAttributes,
		className,
		primaryColor,
	} = props;

	const logoUrl = useSelect( ( select ) => {
		const { getMedia, getEntityRecord } = select( coreStore );
		const siteData = getEntityRecord( 'root', '__unstableBase' );
		const _siteLogoId = siteData?.site_logo;
		const query = { hide_empty: true };
		return getMedia( _siteLogoId, {
			context: 'view',
		} );
	}, [] );
	console.log( logoUrl );

	const blockProps = useBlockProps( {
		className: `ctx-topbar`,
	} );
	return (
		<>
			<style>{ `	
        .fill-primary {
          fill: ${ primaryColor.color };
        }
    ` }</style>
			<div { ...blockProps }>
				<div className="brand">
					{ logoUrl && (
						<SVGUrl size={ 60 } url={ logoUrl.source_url }></SVGUrl>
					) }
					<b>{ claim }</b>
				</div>
				<div>Menu</div>
			</div>

			<Inspector { ...props } />
		</>
	);
};

export default Edit;
