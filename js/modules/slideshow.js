export default function Slideshow() {
	
	/* Variables */

	let currentSlideIndex = 0;

	/* Query selectors */

	const slideshow = document.querySelector('.slideshow__container');
	const slideshowSlides = document.querySelectorAll('.slideshow__images');
	const slideshowDots = document.querySelectorAll('.dot');
	const buttonPrevious = document.querySelector('.previous');
	const buttonNext = document.querySelector('.next');

	/* Event listeners */

	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);
	window.addEventListener('keyup', handleWindowKeyUp);

	for (let index = 0; index < slideshowDots.length; index += 1) {
		slideshowDots[index].addEventListener('click', event => {
			handleDotClick(event, index);
		});
	};

	/* Event handlers */

	function handleButtonPreviousClick(event) {
		decreaseCurrentSlideIndex();
		updateSlideshowHTML();
	};

	function handleButtonNextClick(event) {
		increaseCurrentSlideIndex();
		updateSlideshowHTML();
	};

	function handleWindowKeyUp(event) {
		if (event.key === 'ArrowRight') {
			increaseCurrentSlideIndex();
			updateSlideshowHTML();
		} else if (event.key === 'ArrowLeft') {
			decreaseCurrentSlideIndex();
			updateSlideshowHTML();
		}
	};

	function handleDotClick(event, index) {
		changeCurrentSlideIndex(index);
		updateSlideshowHTML();
	};

	/* Methods */

	function decreaseCurrentSlideIndex() {
		if (currentSlideIndex > 0) {
			currentSlideIndex -= 1;
		} else {
			currentSlideIndex = slideshowSlides.length - 1;
		}
	};

	function increaseCurrentSlideIndex() {
		if (currentSlideIndex < slideshowSlides.length - 1) {
			currentSlideIndex += 1;
		} else {
			currentSlideIndex = 0;
		}
	};

	function changeCurrentSlideIndex(index) {
		currentSlideIndex = index;
	};

	function updateSlideshowHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('slideshow__images--active');
		}

		for (const dot of slideshowDots) {
			dot.classList.remove('dot--active');
		}

		slideshowSlides[currentSlideIndex].classList.add('slideshow__images--active');

		slideshowDots[currentSlideIndex].classList.add('dot--active');
	};
};