export function mediaPosition( { x, y } = DEFAULT_FOCAL_POINT ) {
	return `${ Math.round( x * 100 ) }% ${ Math.round( y * 100 ) }%`;
}
