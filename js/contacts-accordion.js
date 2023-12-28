<<<<<<< HEAD
const accordionItem = document.querySelectorAll(".contacts-accordion__item");




accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelector(".contacts-accordion__header");
    accordionHeader.addEventListener("click", () => {
        item.classList.toggle("open");
    })
    console.log(accordionHeader);
})
=======
const paragraph = document.querySelector(".contacts-accordion__content");

paragraph.innerText = "Hello";
>>>>>>> ee816d664172a10d834010ea03122b23af420279



