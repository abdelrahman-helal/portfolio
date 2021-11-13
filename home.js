const highlightsScroller = document.getElementById("highlights-scroller"),
	highlights = document.getElementById("highlights"),
	worksScroller = document.getElementById("works-scroller"),
	galleryScroller = document.getElementById("gallery-scroller"),
	highlightsButton = document.getElementById("highlights-button");


highlightsButton.addEventListener("click", () => {
	highlights.scrollIntoView();
});

highlightsScroller.addEventListener("click", () => {
	highlights.scrollIntoView();
});

worksScroller.addEventListener("click", () => {
	window.location.href = "./astro.html";
});
