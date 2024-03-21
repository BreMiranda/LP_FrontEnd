/* Faça uma funcão que mostre o dobro do número passado. caso o número seja menor ou igual a zero deve mostrar a mensagem "Só aceito numeros positivos maiores que zero" */
let numero = 0;

function calcularDobro(num) {
    if (num >= 0) {
        console.log("Só aceito números positivos maiores que zero");
    } else {
        console.log(num * 2);
        console.log("O dobro de " + numero + " é ")
       
    }
}
calcularDobro(numero);

