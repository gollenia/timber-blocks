import Progress from "./frontend/progress"
import Modal from "./frontend/modal"
import Alert from "./frontend/alert"

wp.domReady(function () {
    Progress.init('progress');
    Modal.init();
    Alert.init();
});