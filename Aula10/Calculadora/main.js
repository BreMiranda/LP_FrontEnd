let buttons = document.querySelectorAll('.btn');
let buttonsArray = Array.from(buttons);

buttonsArray.forEach(function(button) {
    button.onclick = function() {
        document.querySelector('#resposta').innerHTML = button.innerHTML;
    }
});