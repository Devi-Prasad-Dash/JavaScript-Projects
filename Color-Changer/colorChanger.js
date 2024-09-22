const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button')

console.log(buttons)

buttons.forEach( function(button) {
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        body.style.backgroundColor = e.target.id;
    })
})