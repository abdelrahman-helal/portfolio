const socialScroller = document.getElementById("social-media-scroller"),
	literatureScroller = document.getElementById("literature-scroller"),
	experimentsScroller = document.getElementById("experiments-scroller"),
	categories = document.getElementById("categories"),
	socialMedia = document.getElementById("social-media"),
	articleContent = document.getElementById("article-content"),
	articles = document.getElementsByClassName("article"),
	backButton = document.getElementById("back-button"),
	literature = document.getElementById("literature"),
	literatureEl = document.getElementById("literature-el"),
	experiments = document.getElementById("experiments"),
	literatureContent = document.getElementById("literature-content"),
	experimentsContent1 = document.getElementById("experiments-content1"),
	experimentsContent2 = document.getElementById("experiments-content2"),
	articleBackButton = document.getElementById("article-back-button"),
	experimentsBackButton1 = document.getElementById("experiments-back-button1"),
	experimentsBackButton2 = document.getElementById("experiments-back-button2"),
	experiment1 = document.getElementById("experiment1"),
	experiment2 = document.getElementById("experiment2");

for (let article = 0; article < articles.length; article++) {
	articles[article].addEventListener("click", () => {
		let data = articles[article].getAttribute("data-article");
		document
			.querySelector(`.social-media .content div[data-paragraph=${data}]`)
			.classList.add("visible");
		categories.classList.add("hide");
		articleContent.classList.add("visible");
		setTimeout(() => {
			socialMedia.scrollIntoView();
		}, 1200);
	});
}

backButton.addEventListener("click", () => {
	articleContent.classList.remove("visible");
	categories.classList.remove("hide");
	document
		.querySelector(".social-media .content div.visible")
		.classList.remove("visible");
});

literatureEl.addEventListener("click", () => {
	literature.classList.add("hide");
	literatureContent.classList.add("visible");
	mainContainer.setAttribute("style", "overflow-y: hidden;");
	setTimeout(() => {
		literature.scrollIntoView();
	}, 1200);
});

articleBackButton.addEventListener("click", () => {
	literatureContent.classList.remove("visible");
	literature.classList.remove("hide");
	setTimeout(() => {
		literature.scrollIntoView();
		mainContainer.removeAttribute("style");
	}, 1200);
});

experiment1.addEventListener("click", () => {
	experiments.classList.add("hide-right");
	experimentsContent2.classList.add("visible");
	mainContainer.setAttribute("style", "overflow-y: hidden;");
	setTimeout(() => {
		experimentsContent2.scrollIntoView(true);
	}, 1200);
});

experimentsBackButton1.addEventListener("click", () => {
	experimentsContent1.classList.remove("visible");
	experiments.classList.remove("hide");
	setTimeout(() => {
		experiments.scrollIntoView();
		mainContainer.removeAttribute("style");
	}, 1200);
});

experiment2.addEventListener("click", () => {
	experiments.classList.add("hide");
	experimentsContent1.classList.add("visible");
	mainContainer.setAttribute("style", "overflow-y: hidden;");
	setTimeout(() => {
		experiments.scrollIntoView();
	}, 1200);
});

experimentsBackButton2.addEventListener("click", () => {
	experimentsContent2.classList.remove("visible");
	experiments.classList.remove("hide-right");
	setTimeout(() => {
		experiments.scrollIntoView();
		mainContainer.removeAttribute("style");
	}, 1200);
});

socialScroller.addEventListener("click", () => {
	socialMedia.scrollIntoView();
});

literatureScroller.addEventListener("click", () => {
	literature.scrollIntoView();
});

experimentsScroller.addEventListener("click", () => {
	experiments.scrollIntoView();
});
