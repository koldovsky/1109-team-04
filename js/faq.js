const accordionItem = document.querySelectorAll(".faq-accordion__item");




accordionItem.forEach((item, index) => {
    let accordionHeader = item.querySelector(".faq-accordion__header");
    accordionHeader.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".questions-text__block");
        let icon = item.querySelector(".faq-accordion__icon");
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
    accordionList.forEach((item2,index2) => {
        if(index != index2) {
            item2.classList.remove("open");
            let description2 = item2.querySelector(".questions-text__block");
            let icon2 = item2.querySelector(".faq-accordion__icon");
            description2.style.height = "0px";
            icon2.src = "img/plus-icon.svg";
            icon2.alt = "dark-blue plus icon";
        }
    }) 
   
}
