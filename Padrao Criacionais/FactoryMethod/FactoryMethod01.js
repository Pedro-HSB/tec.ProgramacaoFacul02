// Classe base de veiculo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// Subclasses de veiculos
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Barco extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Fabrica Abstrata de veiculos
class FabricaDeVeiculos{
    criarVeiculo(modelo){
        throw new Error('O modelo criarVeiculo deve ser implementado pelas subclasses');
    }
}

// Fabrica Concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

// Fabrica Concreta de Motos
class FabricaDeMotos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

// Fabrica Concreta de Barcos
class FabricaDeBarcos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Barco(modelo);
    }
}

// USO DO FATORYMETHOD
const fabricaDeCarros = new FabricaDeCarros();
const carro1 = fabricaDeCarros.criarVeiculo('Sedan');
const carro2 = fabricaDeCarros.criarVeiculo('Fusca 68');
carro1.mostrarDetalhes();        // Saida-> Modelo: Sedan
carro2.mostrarDetalhes();        // Saida-> Modelo: Fusca 68

const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo('Esportiva');
moto.mostrarADetalhes();         // Saida-> Modelo: Esportiva

const fabricaDeBarcos = new FabricaDeBarcos();
const barco = fabricaDeBarcos.criarVeiculo('Lancha');
barco.mostrarDetalhes();        // Saida-> Modelo: Lancha
