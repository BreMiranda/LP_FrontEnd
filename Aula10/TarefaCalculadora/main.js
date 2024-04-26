let buttons = document.querySelectorAll('.btn');
let buttonsArray = Array.from(buttons);

for (let i = 0; i < buttonsArray.length; i++) {
    let button = buttonsArray[i];
    button.onclick = function() {
        document.querySelector('#resposta').innerHTML = button.innerHTML;
    }
}