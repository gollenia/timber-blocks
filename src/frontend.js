import Modal from './frontend/modal';
import Progress from './frontend/progress';
import './frontend/scroll.js';

import './frontend/animation.scss';

document.addEventListener('DOMContentLoaded', () => {
	Progress.init('progress');
	Modal();
});
