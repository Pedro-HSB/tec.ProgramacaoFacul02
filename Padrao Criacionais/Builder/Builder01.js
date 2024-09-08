//Definido Partes de um carro
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
        }
}

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Aparencia{
    constructor(cor){
        this.cor = cor;
    }
}

//Builder
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.aparencia = null;
    
    }
    addMotor(tipo){
        this.motor = new Motor(tipo);
    }
    addCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
    }
    addRodas(tamanho){
        this.rodas = new Rodas(tamanho);
    }
    addAparencia(cor){
        this.aparencia = new Aparencia(cor);
    }
    constructor(){
        return new CarroBuilder(this.motor, this.carroceria, this.rodas, this.aparencia);
    }
} 
//Construindo um carro

class Carro{
    constructor(motor, carroceria, rodas, aparencia){
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.aparencia = aparencia;
    }
    mostrarDetalhes(){
        console.log('Detalhes do Carro')
        (`Motor: ${this.motor.tipo}`)
        (`Carroceria: ${this.carroceria.estilo}`)
        (`Rodas: ${this.rodas.tamanho}`)
        (`Aparencia: ${this.aparencia.cor}`);
    }
}

//Interface de ultilização - usando o builder para construir um 
const builder = new CarroBuilder();
const carro1 =builder
    .addMotor('Gasolina')
    .addCarroceria('Sedan')
    .addRodas('16')
    .addAparencia('Preto')
    .constructor();
const carro2 =builder
    .addMotor('Diesel')
    .addCarroceria('SUV')
    .addRodas('18')
    .addAparencia('Vermelho')
    .constructor();
