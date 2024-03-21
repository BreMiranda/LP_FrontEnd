//Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido
// ou false caso contrário. Um email valido deve conter um unico simbolo '@' e pelo menos um ponto '.' apos o @.
let email = "brenda@brendacom"

function validacao(email) {
    let padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return padrao.test(email)
}

 
  if (validacao(email)) {
    console.log('O email ' + email + ' é válido.')
  } else {
    console.log('O email ' + email + ' não é válido.')
  }
