// main.js
const Pessoa = require('./pessoa');
const Automovel = require('./automovel');

class Main {
    constructor() {
        this.pessoas = [];
    }

    addPessoa(pessoa) {
        this.pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        const pessoa = this.pessoas.find(p => p.codigo === codPessoa);
        if (pessoa) {
            const automovel = new Automovel(codAuto, marca, modelo);
            pessoa.inserirAutomovel(automovel);
        } else {
            console.log("Pessoa não encontrada!");
        }
    }

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        const pessoaOrigem = this.pessoas.find(p => p.codigo === codPessoaOrigem);
        const pessoaDestino = this.pessoas.find(p => p.codigo === codPessoaDestino);
        if (pessoaOrigem && pessoaDestino) {
            const automovel = pessoaOrigem.getAutomovel(codAutomovel);
            if (automovel) {
                pessoaOrigem.removerAutomovelByCod(codAutomovel);
                pessoaDestino.inserirAutomovel(automovel);
            } else {
                console.log("Automóvel não encontrado!");
            }
        } else {
            console.log("Pessoa de origem ou destino não encontrada!");
        }
    }

    mostrarTodasAsPessoas() {
        this.pessoas.forEach(pessoa => {
            console.log(pessoa.imprimirCompleto());
        });
    }
}

module.exports = Main;
