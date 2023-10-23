const hamburger_Button = document.querySelector('.hamburger_icon');
const menu = document.querySelector('.mobile_navigation');
const arrow = document.querySelector('.image_arrow');
const drop_down_menu_list = document.querySelector('.ul-drop-down-items');
const search_button = document.querySelector('.search-button');
const input = document.querySelector('.search-bar');
const drop = document.getElementById('drop_down_menu');
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

function hamburger() {
    hamburger_Button.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

function drop_down() {
    drop_down_menu_list.classList.toggle('is-active');
    arrow.classList.toggle('is-active');
}

search_button.addEventListener('click', () => {
    input.classList.toggle("is-active")
})


function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {
        input.classList.remove("is-active");
    }
}

document.addEventListener("keydown", keyCode);


//============================ form validation ========================
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

