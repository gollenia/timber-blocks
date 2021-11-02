const Alert = {

    alerts: false,

    init() {
        let alerts = document.querySelectorAll("div.alert--dismissable");
        this.alerts = alerts;
        if(alerts) {
            for (let index = 0; index < alerts.length; index++) {
                Alert.add(alerts[index]) 
            }
            return alerts;
        }
        return false;
    },

    add: function(alert) {
        alert.querySelector('.alert__close').addEventListener("click", Alert.close.bind(event, alert))
    },

    close: function(alert, event) {
        alert.classList.add('alert--hidden');
        setTimeout(function(){ 
            alert.classList.add('alert--disabled')
        }, 500);
    }
}

export default Alert