
//criando um objeto
let pessoa = {
    nome: "Brenda",
    idade: 50,
    casada: false 

}
//pessoa.nome = "Milene";
console.log(pessoa.nome);
//chamando o objeto de uma forma diferente
console.log(pessoa["nome"]);
//trás todo o conteudo do objeto, considerando o contéudo
//roda propriedades do objeto diferente do on é elementos do array
for (let prop in pessoa) {
    console.log(prop +": "+pessoa[prop]);
    }

let carro = {
    nome: "Gol",
    marca: "Wolksvagem",
    cor: "Prata",
    ligado: false,

        //função anonima que irá ligar o carro
    ligar: function(){
        this.ligado = true //ligando o carro com um set? get? 
    }
}
console.log("O carro está ligado "+carro.ligado);
carro.ligar();
console.log(carro.ligado);