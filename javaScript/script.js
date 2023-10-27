const hamburger_Button = document.querySelector('.hamburger_icon');
const menu = document.querySelector('.mobile_navigation');
const arrow = document.querySelector('.image_arrow');
const drop_down_menu_list = document.querySelector('.ul-drop-down-items');
const search_button = document.querySelector('.search-button');
const search_button_mobile = document.querySelector('.search-button-mobile');
const input = document.querySelector('.search-bar');
const x = document.querySelector('#x');
const drop = document.getElementById('drop_down_menu');

function hamburger() {
    hamburger_Button.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

function drop_down() {
    drop_down_menu_list.classList.toggle('is-active');
    arrow.classList.toggle('is-active');
}

search_button.addEventListener('click', () => {
    input.classList.toggle('is-active');
})
////////////////////////////////////////////////////// 

function drop_down() {
    drop_down_menu_list.classList.toggle('is-active');
    arrow.classList.toggle('is-active');
}

search_button_mobile.addEventListener('click', () => {
    input.classList.toggle('is-active');
})


x.addEventListener('click', () => {
    input.classList.remove('is-active');
});

function keyCode(event) {
    var x = event.keyCode;
    if (x == 27) {
        input.classList.remove("is-active");
    }
}

document.addEventListener("keydown", keyCode);