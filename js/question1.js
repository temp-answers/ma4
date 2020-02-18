// select the form
const form = document.querySelector("#contactForm");

// we can select the input and the input error either outside or inside the function
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

// add a submit event listener to the form
form.addEventListener("submit", validateForm);

// this is the function that will be called when the form is submitted
function validateForm(event) {
    // prevent the default behaviour of the form submit, which is to reload the page
    event.preventDefault();

    // we must get the value of the input inside the function (when the submit happens)
    const firstNameValue = firstName.value;

    // validate the value of the input
    if (validateInput(firstNameValue) === true) {
        // input value is valid, hide the error
        firstNameError.style.display = "none";
    } else {
        // input value is not valid, display the error
        firstNameError.style.display = "block";
    }
}

// we put the validation in a function so that multiple inputs could use it if we added more inputs
// if we change the validation rules (for example, require the value to be 4 characters) we can just change it in one place
function validateInput(value) {
    // check length of the value
    if (value.length >= 2) {
        return true;
    } else {
        return false;
    }
}
