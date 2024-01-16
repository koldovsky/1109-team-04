document.addEventListener("DOMContentLoaded", function () {

    const accordionItems = document.querySelectorAll('.faq-accordion__item');


    accordionItems.forEach(item => {
        const header = item.querySelector('.faq-accordion__header');
        const content = item.querySelector('.faq-accordion__content');

        header.addEventListener('click', () => {
  
            content.style.display = content.style.display === 'block' ? 'none' : 'block';


            const icon = header.querySelector('.faq-accordion__icon');
            icon.src = content.style.display === 'block' ? 'img/minus-icon.svg' : 'img/plus-icon.svg';
        });
    });
});