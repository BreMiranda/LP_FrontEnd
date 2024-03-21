//4. dado o array numeros = [1,2,3,4,5,6,7,8,9,10], escreva uma função que receba um array e retorne um array de números pares;

let numeros = [1,2,3,4,5,6,7,8,9,10];

let impares = function(myArray){
    let numImpar = [];
    for(let i = 0; i< myArray.length; i++){
        if (i % 2 == 0){
            numImpar.push(myArray[i]);
        }
    }
    return numImpar;
}

console.log(impares(numeros));