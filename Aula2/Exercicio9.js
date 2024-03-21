//9. Dado o objeto endereco com propriedades como rua, numero, bairro e cidade. Faça um loop que mostre todas as propriedades e seus valores de forma genérica;

let enderecos ={
    rua: "alalala",
    numero: 2,
    bairro: "lala",
    cidade: "Sorocaba"
}

for (let propriedade in enderecos) {
    console.log(`${propriedade}: ${enderecos[propriedade]}`);
  }