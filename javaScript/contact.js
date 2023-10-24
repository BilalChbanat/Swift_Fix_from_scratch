const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = username.value.trim();
    const messageValue = message.value.trim();

    if (usernameValue === '') {
        username.style = "border: 1px solid red"
    } else {
        username.style = "border: 2px solid green"
    }

    if (emailValue === '') {
        email.style = "border: 1px solid red"
    } else if (!isValidEmail(emailValue)) {
        email.style = "border: 1px solid green"
    } else {
        email.style = "border: 2px solid red"
    }

    if (messageValue === '') {
        message.style = "border: 1px solid red"
    } else {
        message.style = "border: 2px solid green"
    }

};
