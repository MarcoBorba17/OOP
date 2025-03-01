class Carro {
    constructor(marca, modelo, ano) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
    }

    get marca () {
        return this._marca;
    }

    set marca(novamarca) {
        this._marca = novamarca;
    }

    get modelo () {
        return this._modelo;
    }

    set modelo(novomodelo) {
        this._modelo = novomodelo;
    }

    get ano () {
        return this._ano;
    }

    set ano(novoano) {
        this._ano= novoano;
    }

    exibirInfo() {
        return `Marca:${this.marca} - Modelo:${this.modelo} - Ano:${this.ano}`;
    }

    calcularIdade(anoAtual){
        return anoAtual - this.ano;
    }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, autonomia) {
        super(marca, modelo, ano);
        this.autonomia = autonomia;
    }

    exibirInfo() {
        return `${super.exibirInfo()} - Autonomia:${this.autonomia}`;
    }
    // velocidadeCarregamento é dado em minutos
    calcularTempoCarregamento(velocidadeCarregamento) {
        return this.autonomia / velocidadeCarregamento;
    }
}

class CarroCombustao extends Carro {
    constructor(marca, modelo, ano, combustivel) {
        super(marca, modelo, ano);
        this.combustivel = combustivel;
    }
}

//const carroEletrico_01 = new CarroEletrico('Toyota','Corolla',2015,1000);
//console.log(carroEletrico_01.exibirInfo());
//console.log(carroEletrico_01.calcularTempoCarregamento(180))

const carro_01 = new Carro ('Toyota', 'Corolla', 2015)