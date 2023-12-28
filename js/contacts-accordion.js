const accordionItem = document.querySelectorAll(".contacts-accordion__item");




accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelector(".contacts-accordion__header");
    accordionHeader.addEventListener("click", () => {
        item.classList.toggle("open");
    })
    console.log(accordionHeader);
})




