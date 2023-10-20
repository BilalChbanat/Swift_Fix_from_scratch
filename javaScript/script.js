const hamburger_Button = document.querySelector('.hamburger_icon');
const menu = document.querySelector('.mobile_navigation');
const arrow = document.querySelector('.image_arrow');
const drop_down_menu_list = document.querySelector('.ul-drop-down-items');
const drop = document.getElementById('drop_down_menu');

function hamburger() {
    hamburger_Button.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

function drop_down() {
    drop_down_menu_list.classList.toggle('is-active');
    arrow.classList.toggle('is-active');
}
