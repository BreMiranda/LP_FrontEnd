/*Escreva uma função que verifique se uma determinada string é um palindromo. Exemplo Arara*/

const palavra = 'brenda';
const conferencia = conferindo(palavra);

function conferindo(palavra){
    let conferencia = ''; //criando uma variavel vazia
    for (let i = palavra.length - 1; i >= 0; i--) {
        conferencia += palavra[i]; //concatenando o caractere atual na variavel, em outras palavras estamos construindo uma nova palavra só que invertida
    }
        if(conferencia === palavra){
            console.log("A palavra "+palavra+" é  palindromo");
        }else{
            console.log("A palavra "+palavra+" não palindromo");
        }
    

}
