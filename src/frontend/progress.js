const Progress = {

    progressBars: false,

    init(className) {
        let progressBars = document.getElementsByClassName(className);
        this.progressBars = progressBars;
        if(progressBars) {
            for (let index = 0; index < progressBars.length; index++) {
                this.add(progressBars[index]) 
            }
            return progressBars;
        }
        return false;
    },

    add(progressBar) {
        window.addEventListener("scroll", this.update.bind(event, progressBar));
        window.addEventListener("resize", this.update.bind(event, progressBar));
        this.update(progressBar)
    },

    animate(progressBar, duration) {
        this.animating = true;
        const max = progressBar.dataset.max;
        var current = progressBar.dataset.current;
        if (max === current) return;
       
        const percentValue = current > max ? 100 : Math.round(current * 100 / max);
        const barValue = percentValue > 100 ? 100 : percentValue;

        var steps = duration / 1000 * 50;
        var step = 0;
       
        var currentValueLabel = progressBar.getElementsByClassName('progress__number-injection')[0];
        var indicator = progressBar.getElementsByClassName('progress__indicator')[0];
        var percentLabel = progressBar.getElementsByClassName('progress__label')[0];
        
        var timer = setInterval(function() {
            step++;
            var factor = Math.sqrt(1 - Math.pow(step / steps - 1, 2));
            var countValue = new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(Math.round(current * factor))
            currentValueLabel.innerHTML = countValue;
            indicator.style.width = `${barValue * factor}%`
            percentLabel.innerHTML = `${Math.round(percentValue * factor)}%`
            if (step == steps) {
                clearInterval(timer);
            }
        }, 20);
    },

    update(progressBar, event = false) {
        var position = progressBar.getBoundingClientRect();

        var isLoaded = progressBar.classList.contains("progress--loaded");
        console.log(isLoaded);
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            console.log("animating?");
            if (!isLoaded) {
                console.log("animating!");
                progressBar.style.width = "{{percent}}%";
                progressBar.classList.add("progress--loaded");
                Progress.animate(progressBar, 3000);
            }
            return;
        }
        progressBar.classList.remove("progress--loaded");

    }
}

export default Progress;