class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
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

const carroEletrico_01 = new CarroEletrico('Toyota','Corolla',2015,1000);
console.log(carroEletrico_01.exibirInfo());
console.log(carroEletrico_01.calcularTempoCarregamento(180))
