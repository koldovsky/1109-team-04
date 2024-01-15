
const inputName = document.querySelector(".contacts-form__input-name");
const errorMessageName = document.querySelector(".error-message__name");

inputName.addEventListener("input", () => {
    const namePattern = /^[a-zA-Z ]+$/;
    const fullName = inputName.value;
    if (fullName.length < 4) {
        errorMessageName.textContent = "Your full name is too short!";
        errorMessageName.classList.remove("correct")
        errorMessageName.classList.add("active-error");
    }
    else if (!namePattern.test(fullName)) {
        errorMessageName.textContent = "Use only english letters!";
        errorMessageName.classList.remove("correct");
        errorMessageName.classList.add("active-error");
    }
    else {
        errorMessageName.textContent = "Success!";
        errorMessageName.classList.remove("active-error");
        errorMessageName.classList.add("correct");
    }
    if (fullName.length === 0) {
        errorMessageName.classList.remove("active-error");
        errorMessageName.classList.remove("correct");
    }
});

const inputPhone = document.querySelector(".contacts-form__input-phone");
const errorMessagePhone = document.querySelector(".error-message__phone");

inputPhone.addEventListener("input", () => {
    const phoneNumber = inputPhone.value;
    const phoneNumberPattern = /^\+?3?8?(0\d{9})$/;
    if (phoneNumberPattern.test(phoneNumber)) {
        errorMessagePhone.textContent = "Success!";
        errorMessagePhone.classList.remove("active-error");
        errorMessagePhone.classList.add("correct");
    }
    else {
        errorMessagePhone.textContent = "Phone number pattern +380XXXXXXXXX";
        errorMessagePhone.classList.remove("correct");
        errorMessagePhone.classList.add("active-error");
    }
    if (phoneNumber.length === 0) {
        errorMessagePhone.classList.remove("active-error");
        errorMessagePhone.classList.remove("correct");
    }
})

const petsInfoInput = document.querySelector(".contacts-form__input-pets-info");
const errorMessagePetsInfo = document.querySelector(".error-message__pets-info")

petsInfoInput.addEventListener("input", () => {
    const petsInfo = petsInfoInput.value;
    const petsInfoPattern = /^[a-zA-Z,.-_ ]+[0-9]{1,}$/;
    if (petsInfoPattern.test(petsInfo)) {
        errorMessagePetsInfo.textContent = "Success!";
        errorMessagePetsInfo.classList.remove("error-message");
        errorMessagePetsInfo.classList.add("correct");
    }
    else {
        errorMessagePetsInfo.textContent = "Incorrect input! Example: Topic 10";
        errorMessagePetsInfo.classList.remove("correct");
        errorMessagePetsInfo.classList.add("active-error");
    }
    if (petsInfo.length === 0) {
        errorMessagePetsInfo.classList.remove("active-error");
        errorMessagePetsInfo.classList.remove("correct");
    }
})

const serviceInput = document.querySelector(".contacts-form__input-service");
const chooseServiceError = document.querySelector(".error-message__choose-servise");

serviceInput.addEventListener("change", function () {
    const selectedOption = this.value;

    if (selectedOption === "option-link") {
        window.open('./services.html', '_blank');
        chooseServiceError.classList.remove("correct");
        chooseServiceError.textContent = "Now choose services, please!"
        chooseServiceError.classList.add("active-error");
    }
    else {
        chooseServiceError.classList.remove("active-error");
        chooseServiceError.textContent = "Succes!";
        chooseServiceError.classList.add("correct");
    }
});


//Date input format
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

const formattedToday = yyyy + "-" + mm + "-" + dd;
document.querySelector(".contacts-form__input-date").value = formattedToday;

//Submit
const contactsForm = document.querySelector(".contacts-form");

contactsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (errorMessageName.classList.contains("correct") && errorMessagePhone.classList.contains("correct")
        && errorMessagePetsInfo.classList.contains("correct") && !chooseServiceError.classList.contains("active-error")) {
        contactsForm.submit();
    }
});




