/* function salvar() {
    localStorage.setItem("nome", "Brenda");
    console.log("salvo com sucesso")
}

function ler() {
    let myName = localStorage.getItem("nome");
    console.log(myName);
}

function remover(){
    localStorage.removeItem("nome");
    //localStorage.clear
    console.log("removido OKAY")
} */
/* 
function salvar() {
    sessionStorage.setItem("nome", "Brenda");
    console.log("salvo com sucesso")
}

function ler() {
    let myName = sessionStorage.getItem("nome");
    console.log(myName);
}

function remover(){
    sessionStorage.removeItem("nome");
    //localStorage.clear
    console.log("removido OKAY")
}

 */

document.querySelector('#myform').addEventListener('submit',
    function (event) {
        event.preventDefault(); //essa função faz a pagina ao clicar no botão não recarregar.
    });

//localStorage.clear();

let usuario = localStorage.getItem("usuario");
let senha = localStorage.getItem("senha");

if (usuario && senha) {
    /*  document.querySelector('#usuario').value = usuario;
     document.querySelector('#senha').value = senha;
  */
    /* window.location.href = 'home.html' */ /* se colocar essa parte se for o usuário e senha certo já recarrega */

    validate(usuario, senha);
}

//validando campos
function checkLogin() {
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;

    validate(usuario, senha);

}

function validate(usuario, senha){
    
    if (usuario == 'admin' && senha == 'admin') {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('senha', senha);

        window.location.href = 'home.html'
    } else {
        document.querySelector('#error').innerHTML = 'Usuário ou senha inválidos'
    }
}