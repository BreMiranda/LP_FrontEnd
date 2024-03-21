//7. Escreva uma função chamada encontraMaiorNumero que recebe um array de números como entrada e retorna o maior número encontrado no Array

let numeros = [1,2,3];

let maiorNumero = function(num){
    let numMaior = 0;
    for(let i = 0; i <= num.length; i++){
        if(i>numMaior){
            numMaior = i;
        }
    }
    return numMaior;
}
console.log(maiorNumero(numeros))