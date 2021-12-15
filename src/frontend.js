import Progress from './frontend/progress';
import Modal from './frontend/modal';
import Alert from './frontend/alert';

document.addEventListener('DOMContentLoaded', () => {
	Progress.init('progress');
	Modal();
	Alert.init();
});
