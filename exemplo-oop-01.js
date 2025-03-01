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

const carro_01 = new Carro('Toyota','Corolla',2015);
//console.log(carro_01);
console.log(carro_01.exibirInfo());
console.log(carro_01.calcularIdade(2025));

const carro_02 = new Carro('Ford','Del Rey 1.8',1990);
console.log(carro_02.exibirInfo());

    

