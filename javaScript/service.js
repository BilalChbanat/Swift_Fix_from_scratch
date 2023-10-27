const btn = document.querySelector('#btn-box');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 1;
    }
}, 2500);

btn.addEventListener('click', () => {
    popup.classList.toggle('is-active');
});
x.addEventListener('click', () => {
    popup.classList.remove('is-active');
});