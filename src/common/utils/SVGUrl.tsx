import { useEffect, useState } from 'react';

interface Props {
	url: string;
	size?: number;
}

const SVGUrl = ( props: Props ) => {
	const [ image, setImage ] = useState< string >( '' );
	const [ loading, setLoading ] = useState( false );

	const { url, size } = props;
	useEffect( () => {
		setLoading( true );
		fetch( url )
			.then( ( res ) => res.text() )
			.then( ( res ) => {
				const domParser = new DOMParser();
				setImage( res );
				setLoading( false );
			} );
	}, [] );

	return loading ? (
		<></>
	) : (
		<div
			style={ { width: size + 'px' } }
			dangerouslySetInnerHTML={ { __html: image } }
		></div>
	);
};

SVGUrl.defaultProps = {
	size: 100,
};

export default SVGUrl;
