

function mudarimagem() {
    let myimagem = document.querySelector('img');
    myimagem.src = 'imagem/horse.png';
    myimagem.setAttribute('width', '90px');
}

function trocartitulo() {
    let titulo = document.querySelector('#titlo');
    titulo.innerHTML = 'mudei rs';
}/* essa é uma forma de fazer, mas a ação teria que ficar no hmtl no onclick */

document.querySelector('#mudarEstilo').onclick = function () {
    document.querySelector('#titlo').classList.add('newTitulo');

    let paragrafo = document.querySelector('p');
    paragrafo.style.color = 'red';
    paragrafo.style.fontSize = '20';
}

document.querySelector('#removeEstilo').onclick = function () {
    let titulo = document.querySelector('#titlo');

    let paragrafo = document.querySelector('p');
    paragrafo.style.color = '';
    paragrafo.style.fontSize = '';

}

document.querySelector('#trocartitulo').onclick = function () {
    let titulo = document.querySelector('#titlo');
    titulo.innerHTML = 'mudei rs';
} /* outra forma de fazer */
/* 
document.querySelector('p').style.color = 'pink';
document.querySelector('p').style.fontSize ='20px'; */

/* oooou */
// let paragrafo = document.querySelector('p');
// paragrafo.style.color = 'red';
// paragrafo.style.fontSize = '20';

document.querySelector('#playAudio').onclick = function () {
    document.querySelector('#myaudio').play();
}

let buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button){
    button.onclick = function(){
        document.querySelector('#resposta').innerHTML = button.innerHTML;
    }
});

