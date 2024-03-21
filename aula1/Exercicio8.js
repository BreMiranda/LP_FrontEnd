/* /* Escreva uma função que receba uma string como argumento e retorna o número de vogais presentes nessa string. considere apenas vogais minúsculas(a, e, i ,o , u). */

var nome = 'paola';
let qnt = 0;

function conferindoVogais(nome) {
    for (let i = 0; i < nome.length; i++) {
        let letra = nome[i];
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
            qnt++;
        }
   }
}
conferindoVogais(nome);
console.log("a quantidade de vogais na palavra é "+ qnt)
//if(nome )
//console.log(nome.length);*/