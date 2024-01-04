const slides = [
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-cat.png" alt="icon cat">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Cats</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">Your cat will purr with pleasure in our hands.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-dog.png" alt="icon dog">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Dogs</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">Tasty food, running, and playing with your dog.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-rabbit.png" alt="icon rabbit">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Rabbits</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">We will look after your favorite ball of fur.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-fish.png" alt="icon fish">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Fish</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">The inhabitants of your aquarium will be happy.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-turtle.png" alt="icon turtle">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Turtles</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">Your cold-blooded pets will stay healthy.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
    `<div class="pets-carousel__item">
        <div class="pets-carousel__item-img">
            <img src="img/icon-bird.png" alt="icon bird">
        </div>
        <div>
            <h3 class="pets-carousel__item-title">Birds</h3>
            <div class="pets-carousel__item-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="3000px" height="33" style="width:20%">
                    <path d="M0 16.5 L3000 16.5" style="fill:none;stroke:#ff5b2e;stroke-width:3px"></path>
                </svg>
            </div>
            <p class="pets-carousel__item-text">We will feed your birds, clean the cage, etc.</p>
        </div>
        <div>
            <a class="pets-carousel__item-link" href="services.html">Learn More</a>
        </div>
    </div>`,
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.pets-carousel__items');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 992px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            if (window.matchMedia('(min-width: 1280px)').matches) {
                const fourthSlideIdx = thirdSlideIdx + 1 > slides.length - 1 ? 0 : thirdSlideIdx + 1;
                slideContainer.innerHTML += slides[fourthSlideIdx];
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

const buttonNext = document.querySelector('.pets-carousel__button-next');
buttonNext.addEventListener('click', nextSlide);

const buttonPrev = document.querySelector('.pets-carousel__button-prev');
buttonPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);