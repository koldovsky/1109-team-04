const slides = [
    '<div class="brands-carousel__image"><img src="img/brand-one.svg" alt="Royal Canin"></div>',
    '<div class="brands-carousel__image"><img src="img/brand-pet-pow.svg" alt="Pet Power"></div>',
    '<div class="brands-carousel__image"><img src="img/brand-pedigree.svg" alt="Pedigree"></div>',
    '<div class="brands-carousel__image"><img src="img/brand-petco.svg" alt="Petco"></div>',
    '<div class="brands-carousel__image"><img src="img/brand-purina.svg" alt="Purina"></div>',
    '<div class="brands-carousel__image"><img src="img/brand-ipf.svg" alt="Iams Pet Food"></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.brands-carousel__images');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 468px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 770px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            if (window.matchMedia("(min-width: 990px)").matches) {
                const fourthSlideIdx = thirdSlideIdx + 1 > slides.length - 1 ? 0 : thirdSlideIdx + 1;
                const fifthSlideIdx = fourthSlideIdx + 1 > slides.length - 1 ? 0 : fourthSlideIdx + 1;
                slideContainer.innerHTML += slides[fourthSlideIdx];
                slideContainer.innerHTML += slides[fifthSlideIdx];
            }
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

// setInterval(nextSlide, 3000);

const buttonNext = document.querySelector('.brands-carousel__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.brands-carousel__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);