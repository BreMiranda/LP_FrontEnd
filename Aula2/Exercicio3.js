//3. dado o Array numeros = [10,20,30,40,50], escreva uma função que receba um array e retorne a soma de todos os elementos desse arry. 

let myArray = [10,20,30,40,50];

let soma = function (myArrayParam){
    let total = 0;
    for(let i = 0 ; i < myArrayParam.length; i++){
        total += myArrayParam[i];
    }
    return total
} 

console.log(soma(myArray));