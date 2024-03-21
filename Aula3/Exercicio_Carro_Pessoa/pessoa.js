// pessoa.js
class Pessoa {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.automoveis = [];
    }

    get codigo() {
        return this._codigo;
    }

    inserirAutomovel(automovel) {
        this.automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {
        this.automoveis = this.automoveis.filter(auto => auto.codigo !== codigo);
    }

    getAutomovel(codigo) {
        return this.automoveis.find(auto => auto.codigo === codigo);
    }

    imprimir() {
        return `Código: ${this.codigo}, Nome: ${this.nome}`;
    }

    imprimirCompleto() {
        let info = this.imprimir();
        info += "\nAutomóveis:";
        this.automoveis.forEach(auto => {
            info += `\n${auto.imprimir()}`;
        });
        return info;
    }
}

module.exports = Pessoa;
