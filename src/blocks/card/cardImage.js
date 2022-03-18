const CardImage = ({image, failMessage}) => {	
	if (!image) return <></>;
	
	if (image.subtype == 'svg+xml') return (<img src={image.url}></img>);

	if(!image?.sizes?.large) return(<p>{failMessage}</p>)
	
	return (
		<img src={image.sizes.large.url}></img>
	)
}

export default CardImage;