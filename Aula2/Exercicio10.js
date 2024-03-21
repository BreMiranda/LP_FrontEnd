//10. Escreva uma função chamada alunosMaior que recebe um array de objetos Alunos(criado anteriormente) como entrada e retorna um novo array apenas com os alunos com idade acima de 18 anos.
let Aluno1 = {
    nome: "Brenda",
    idade: 22,
    curso: "ADS",
    matricula: 236681
}

let Aluno2 = {
    nome: "Caroline",
    idade: 17,
    curso: "Direito",
    matricula: 176686
}

let Aluno3 = {
    nome: "Maria",
    idade: 20,
    curso: "Ciência da computação",
    matricula: 236683
}

let alunos = [Aluno1, Aluno2, Aluno3];

function alunosMaior(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.idade > 18);
}

console.log(alunosMaior(alunos));
