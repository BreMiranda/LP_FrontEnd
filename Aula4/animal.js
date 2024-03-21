//classe animal com (nome, idade)
//criar um Array com 5 animais
//retorna os animais com idade maior que 5 usando o filter;
//filter trás um array, find trás o item;

class animal{
   constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
   }
}
let myArray = [
    new animal('lilica', 3),
    new animal('lala', 5),
    new animal('lulu', 2),
    new animal('lili', 1),
    new animal('loló', 10)
];

let achandoAnimais = myArray.filter(animal => animal.idade>=5); 

console.log(achandoAnimais);