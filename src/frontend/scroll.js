const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('ctx-animate-start');
			return;
		}
		entry.target.classList.remove('ctx-animate-start');
	});
});

const animatedElements = document.querySelectorAll('.ctx-animate-on-scroll');
animatedElements.forEach((element) => {
	observer.observe(element);
});
