const observer = new IntersectionObserver(function(entries) {
    const nav = document.querySelector("header");
	if(entries[0].isIntersecting === true) {
        nav.classList.add("invisible")
    } else {
        nav.classList.remove("invisible")
    }
}, { threshold: [1] });

observer.observe(document.querySelector("#back-top-button"));