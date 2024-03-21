//função anonima

let soma = function (a, b = 0) {
    return a + b;
};
console.log(soma(1,2)); 

// arrow function 
let subtracao = (a, b) => a-b;

//bigint

//array: matrizzz
let myArray = [1,2,3,4,5];
let myArray2 = ["Brenda", 50, false];

console.log(myArray2[2]);

// array dentro de arrray
let matriz = [["brenda", 21, true], ["milene", 20, false] , ["sarah", 18, true]];
console.log(matriz)

console.log(matriz[0])

console.log(matriz[0] [0])

//iterando arrays
let frutas = ["banana", "maça", "pera"]

for (i =0 ; i< frutas.length; i++){
    console.log(frutas[i])
}

//forEach do javaScript
for (let item of frutas){
    console.log(item)
}

//Editando o Array
//let frutas = ["banana", "maça", "pera"]

frutas.push("laranja"); //adicionando no final
frutas.unshift("morango")//adicionando no inicio
console.log(frutas)

frutas.pop();//tira o ultimo
frutas.shift();//tira o primeiro
console.log(frutas)
