export default function Slideshow() {
	// Slides index
	let slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(number) {
	showSlides(slideIndex += number);
	};

	// Thumbnail image controls
	function currentSlide(number) {
	showSlides(slideIndex = number);
	};

	function showSlides(number) {
	let index;
	let slides = document.getElementsByClassName("slideshow__images");
	let dots = document.getElementsByClassName("dot");
	if (number > slides.length) {slideIndex = 1}
	if (number < 1) {slideIndex = slides.length}
	for (index = 0; index < slides.length; index += 1) {
		slides[index].style.display = "none";
	};
	for (index = 0; index < dots.length; index += 1) {
		dots[index].className = dots[index].className.replace("active", "");
	};
	slides[slideIndex-1].style.display = " block";
	dots[slideIndex-1].className += " active";
	};
};