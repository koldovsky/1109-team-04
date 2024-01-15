const accordionItem = document.querySelectorAll(".contacts-accordion__item");




accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelector(".contacts-accordion__header");
    accordionHeader.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".contacts-accordion__description");
        let icon = item.querySelector(".contacts-accordion__icon");
        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`
            icon.src = "img/minus-icon.svg";
            icon.alt = "dark-blue plus icon";
        }else {
            description.style.height = "0px";
            icon.src = "img/plus-icon.svg";
            icon.alt = "dark-blue plus icon";
        }
        console.log(description);
        removeClassOpen(index);
    })  
})

function removeClassOpen(index) {
    accordionItem.forEach((item2,index2) => {
        if(index != index2) {
            item2.classList.remove("open");
            let description2 = item2.querySelector(".contacts-accordion__description");
            let icon2 = item2.querySelector(".contacts-accordion__icon");
            description2.style.height = "0px";
            icon2.src = "img/plus-icon.svg";
            icon2.alt = "dark-blue plus icon";
        }
    }) 
   
}






