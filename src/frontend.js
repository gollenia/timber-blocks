import Ukiyo from 'ukiyojs';
import Alert from './frontend/alert';
import Modal from './frontend/modal';
import Progress from './frontend/progress';

document.addEventListener( 'DOMContentLoaded', () => {
	Progress.init( 'progress' );
	Modal();
	Alert.init();
} );

const images = document.querySelectorAll( '.has-parallax' );
new Ukiyo( images );
