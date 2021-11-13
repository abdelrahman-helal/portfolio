const head = document.getElementById("head"),
	circle = document.getElementById("circle"),
	nav = document.getElementById("nav"),
	overview = document.getElementById("overview"),
	discover = document.getElementById("discover");

discover.addEventListener("click", () => {
	overview.scrollIntoView();
});

mainContainer.addEventListener("scroll", () => {
	if (mainContainer.scrollTop >= 400) {
		head.classList.add("sticky-head");
	} else {
		head.classList.remove("sticky-head");
	}
});

circle.addEventListener("click", () => {
	circle.classList.toggle("active");
	nav.classList.toggle("active");
});
