/* Escreva uma função que receba uma string como argumento e retorne a string invertida */

var nome = 'facens';
var nomeInvertido = invertindoNome(nome);
console.log(nomeInvertido)

function invertindoNome(nome){
    let nomeInvertido = ''; //criando uma variavel vazia
    for (let i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i]; //concatenando o caractere atual na variavel, em outras palavras estamos construindo uma nova palavra só que invertida
    }
    return nomeInvertido;
}
