const card_p = document.querySelector('.card_say_p');
const cards = document.querySelectorAll('.card_say');

function card_functions(e) {
    const card_p = e.currentTarget.querySelector('.card_say_p');
    card_p.classList.toggle('is-active');
}

cards.forEach(card => {
    card.addEventListener('click', card_functions);
});
