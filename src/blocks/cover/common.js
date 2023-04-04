export const POSITION_CLASSNAMES = {
	'top left': 'position--top-left',
	'top center': 'position--top-center',
	'top right': 'position--top-right',
	'center left': 'position--middle-left',
	'center center': 'position--middle-center',
	center: 'position--middle-center',
	'center right': 'position--middle-right',
	'bottom left': 'position--bottom-left',
	'bottom center': 'position--bottom-center',
	'bottom right': 'position--bottom-right',
};

export const IMAGE_BACKGROUND_TYPE = 'image';
export const VIDEO_BACKGROUND_TYPE = 'video';
export const COVER_MIN_HEIGHT = 50;
export const COVER_MAX_HEIGHT = 1000;
export const COVER_DEFAULT_HEIGHT = 300;
export const DEFAULT_FOCAL_POINT = { x: 0.5, y: 0.5 };
export const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

export function attributesFromMedia( setAttributes, dimRatio ) {
	return ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { url: undefined, id: undefined } );
			return;
		}

		let mediaType;
		// For media selections originated from a file upload.
		if ( media.media_type ) {
			if ( media.media_type === IMAGE_BACKGROUND_TYPE ) {
				mediaType = IMAGE_BACKGROUND_TYPE;
			} else {
				// only images and videos are accepted so if the media_type is not an image we can assume it is a video.
				// Videos contain the media type of 'file' in the object returned from the rest api.
				mediaType = VIDEO_BACKGROUND_TYPE;
			}
		} else {
			// For media selections originated from existing files in the media library.
			if (
				media.type !== IMAGE_BACKGROUND_TYPE &&
				media.type !== VIDEO_BACKGROUND_TYPE
			) {
				return;
			}
			mediaType = media.type;
		}

		setAttributes( {
			dimRatio: dimRatio === 100 ? 50 : dimRatio,
			url: media.url,
			id: media.id,
			alt: media?.alt,
			backgroundType: mediaType,
			focalPoint: undefined,
			...( mediaType === VIDEO_BACKGROUND_TYPE
				? { hasParallax: undefined }
				: {} ),
		} );
	};
}

export function mediaPosition( { x, y } = DEFAULT_FOCAL_POINT ) {
	return `${ Math.round( x * 100 ) }% ${ Math.round( y * 100 ) }%`;
}
