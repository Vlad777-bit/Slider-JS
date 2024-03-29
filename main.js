'use strict';

const next = document.querySelector('#btnNext'),
	prev = document.querySelector('#btnPrev'),
	slides = document.querySelectorAll('.slide'),
	dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
	for (let slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
};

const activeDot = n => {
	for (let dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
};

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
};

const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
};

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// const interval = setInterval(nextSlide, 2500);

		


