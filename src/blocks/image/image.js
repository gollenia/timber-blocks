import relativeUrl from "../../common/utils/relurl";


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
            width,
            image
        } = attributes;

        var imageClasses = [
			round ? "uk-border-circle" : false,
			shadow ? "uk-box-shadow-large" : false,
			border ? "ctx-border-image" : false
        ].filter(Boolean).join(" ");


        if(!image) {
            return
        }

        if(image.subtype == "svg+xml") {
            return(
            <img 
                className={imageClasses}
                data-src={relativeUrl(image.url)}
                width={`${width}%`} 
                uk-img=""
            />);
        }


		if (round && image.sizes.qlarge) {

            var srcset = [
                image.sizes.xsmall !== undefined ? relativeUrl(image.sizes.qsmall.url) + " 150w" : false,
                image.sizes.medium !== undefined ? relativeUrl(image.sizes.qmedium.url) + " 300w" : false,
                image.sizes.large !== undefined ? relativeUrl(image.sizes.qlarge.url) + " 500w" : false,
                image.sizes.fullhd !== undefined ? relativeUrl(image.sizes.qxlarge.url) + " 800w" : false,
            ].filter(Boolean).join(", ");

            return (
                <img 
                    className={imageClasses}
                    data-src={relativeUrl(image.sizes.qlarge.url)}
                    sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
                    data-srcset={srcset}
                    width={`${width}%`} 
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
			image.sizes.xsmall !== undefined ? relativeUrl(image.sizes.xsmall.url) + " 350w" : false,
			image.sizes.small !== undefined ? relativeUrl(image.sizes.small.url) + " 500w" : false,
			image.sizes.medium !== undefined ? relativeUrl(image.sizes.medium.url) + " 720w" : false,
			image.sizes.large !== undefined ? relativeUrl(image.sizes.large.url) + " 1300w" : false,
			image.sizes.fullhd !== undefined ? relativeUrl(image.sizes.fullhd.url) + " 1920w" : false,
			image.sizes.wqhd !== undefined ? relativeUrl(image.sizes.wqhd.url) + " 2560w" : false
        ].filter(Boolean).join(", ");

        return (
            <img 
                className={imageClasses}
                data-src={relativeUrl(image.url)}
                sizes="(min-width: 1920px) 50vw, (min-width: 1080) 70vw, 100vw"
                data-srcset={srcset}
                width={`${width}%`} 
                uk-img=""
            />
        );

	
}

export default ImageRenderer;