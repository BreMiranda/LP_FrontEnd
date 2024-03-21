//1. Crie uma função anônima que rceba nome e sobrenome e retorne o nome completo. Atribua essa função a uma variável. Chame essa variável passando "Fabio", "Colombini" e monsta o resultado no console.

let nome = "Brenda";
let sobrenome = "Miranda";

let NomeCompleto = function (a, b) {
    return a + " "+ b;
};
console.log(NomeCompleto(nome,sobrenome)); 