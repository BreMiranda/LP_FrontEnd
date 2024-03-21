//8. Crie um objeto chamado produto com as propriedades nome, preco, quantidade e calcularTotal. o método calcularTotal deve retornar o preço total do produto(preco x quantidade)

//8. Crie um objeto chamado produto com as propriedades nome, preco, quantidade e calcularTotal. o método calcularTotal deve retornar o preço total do produto(preco x quantidade)

let produto ={
    nome : "arroz",
    preco : 2,
    quantidade : 2,
    calcularTotal : 0,

    calculo: function(){
        this.calcularTotal =this.preco * this.quantidade;
    }
}
produto.calculo();
console.log(produto.calcularTotal);