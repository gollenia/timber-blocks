import { __ } from '@wordpress/i18n'; 

const CardImage = ({image, failMessage}) => {	
	if (!image) return <></>;
	
	if (image.subtype == 'svg+xml') return (<img src={image.url}></img>);

	// TODO: Write a better mehtod to determine the best image size
	if(!image?.sizes?.large) <><img src={image.sizes.medium.url}></img><p className="image__warning">{__('Image may be too small')}</p></>;
	
	return (<img src={image.sizes.large.url}></img>);
}

export default CardImage;