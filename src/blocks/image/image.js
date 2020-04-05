
/* Background Video.
*
* @param {Object} attributes The attributes.
* @return {string} html content.
*/
function ImageRenderer(attributes) {

		const {
            round,
            shadow,
            border,
            image
        } = attributes;

        var imageClasses = [
			round ? "ctx-round-image" : false,
			shadow ? "ctx-shadow-image" : false,
			border ? "ctx-border-image" : false
        ].filter(Boolean).join(" ");
        

		if (round && image.sizes.qmedium) {

            var srcset = [
                image.sizes.xsmall !== undefined ? image.sizes.qsmall.url + " 150w" : false,
                image.sizes.medium !== undefined ? image.sizes.qmedium.url + " 300w" : false,
                image.sizes.large !== undefined ? image.sizes.qlarge.url + " 500w" : false,
                image.sizes.fullhd !== undefined ? image.sizes.qxlarge.url + " 800w" : false,
            ].filter(Boolean).join(", ");

            return (
                <img 
                    className={imageClasses}
                    data-src={image.sizes.qxlarge.url}
                    sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
                    data-srcset={srcset}
                    width={image.width} 
                    height={image.height} 
                    uk-img="" 
                />
            );
        }

        if (round && !image.sizes.qmedium) {
            return (
                <div>
                    Bild konnte nicht geladen werden. Bitte erneut hochladen.
                </div>
            );
        }

        var srcset = [
			image.sizes.xsmall !== undefined ? image.sizes.xsmall.url + " 350w" : false,
			image.sizes.small !== undefined ? image.sizes.small.url + " 500w" : false,
			image.sizes.medium !== undefined ? image.sizes.medium.url + " 720w" : false,
			image.sizes.large !== undefined ? image.sizes.large.url + " 1300w" : false,
			image.sizes.fullhd !== undefined ? image.sizes.fullhd.url + " 1920w" : false,
			image.sizes.wqhd !== undefined ? image.sizes.wqhd.url + " 2560w" : false
        ].filter(Boolean).join(", ");

        return (
            <img 
                className={imageClasses}
                data-src={image.url}
                sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
                data-srcset={srcset}
                width={image.width} 
                height={image.height} 
                uk-img=""
            />
        );

	
}

export default ImageRenderer;