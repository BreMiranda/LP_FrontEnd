// automovel.js
class Automovel {
    constructor(codigo, marca, modelo) {
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
    }

    get codigo() {
        return this._codigo;
    }

    imprimir() {
        return `Código: ${this.codigo}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

module.exports = Automovel;
