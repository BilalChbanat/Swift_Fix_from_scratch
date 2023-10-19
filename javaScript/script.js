const hamburger_Button = document.querySelector('.hamburger_icon');
const menu = document.querySelector('.mobile_navigation');
const header = document.querySelector('header');
function show_dropdown_menu_() {
    hamburger_Button.classList.toggle('is-active');
    menu.classList.toggle('is-active');

}