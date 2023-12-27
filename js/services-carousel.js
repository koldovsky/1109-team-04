const slides = [
    `<div>  <div class="services-carousel__item"> <div class="services-carousel__image"> <img src="img/girl-with-dog-blue.png" alt="A girl with a Jack Russell Terrier" class="services-carousel__img" width="360"/> </div> <div class="services-carousel__content"> <p class="services-carousel__title-item">Dog Walking</p> <p class="services-carousel__text-item"> We can take your dog for a walk on schedule and bring it back home. </p> <span class="services-carousel__price-item">from $10/hour</span> </div></div></div>`,
    `<div> <div class="services-carousel__item"><div class="services-carousel__image"> <img src="img/parrot.png" alt="A colorful parrot" class="services-carousel__img" width="360" /> </div> <div class="services-carousel__content"> <p class="services-carousel__title-item">Vet Consultations</p> <p class="services-carousel__text-item"> If you have any questions or issues with your pet, we will be happy to advise you. </p> <span class="services-carousel__price-item">from $25/session</span> </div></div></div>`,
    `<div>  <div class="services-carousel__item"><div class="services-carousel__image"> <img src="img/girl-with-cat.png" alt="A girl with a cat" class="services-carousel__img" width="360" /> </div> <div class="services-carousel__content"> <p class="services-carousel__title-item">Pet Sitting</p> <p class="services-carousel__text-item"> We will sit with your pet and even stay overnight if needed. </p> <span class="services-carousel__price-item">from $15/hour</span> </div></div></div>`,
    `<div> <div class="services-carousel__item"><div class="services-carousel__image"> <img src="img/girl-with-dog-pink.png" alt="A girl with a pink Siberian Husky dog" class="services-carousel__img" width="360" /> </div> <div class="services-carousel__content"> <p class="services-carousel__title-item">Dog Training</p> <p class="services-carousel__text-item"> Professional dog handlers can train dogs of any breed and consult their owners. </p> <span class="services-carousel__price-item">from $35/hour</span> </div></div></div>`,
  ];
  
  let currentSlideIdx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(".services-carousel__items");
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia("(min-width: 768px)").matches) {
      const secondSlideIdx =
        currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
  
      if (window.matchMedia("(min-width: 1024px)").matches) {
        const thirdSlideIdx =
          secondSlideIdx + 1 > slides.length - 1 ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }
  function nextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 > slides.length - 1 ? 0 : currentSlideIdx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }
  renderSlide();

  const buttonNext = document.querySelector(".services-carousel__button-next");
  buttonNext.addEventListener("click", nextSlide);
  const buttonPrev = document.querySelector(".services-carousel__button-prev");
  buttonPrev.addEventListener("click", prevSlide);
  window.addEventListener("resize", renderSlide);
