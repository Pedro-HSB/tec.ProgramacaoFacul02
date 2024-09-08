# Classe base de veículo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrar_detalhes(self):
        print(f"Modelo: {self.modelo}")

# Subclasses de veículos
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

class Barco(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)

# Fábrica Abstrata de veículos
from abc import ABC, abstractmethod

class FabricaDeVeiculo(ABC):
    @abstractmethod
    def criar_veiculo(self, modelo):
        pass

# Fábrica Concreta de Carros
class FabricaDeCarros(FabricaDeVeiculo):
    def criar_veiculo(self, modelo):
        return Carro(modelo)

# Fábrica Concreta de Motos
class FabricaDeMotos(FabricaDeVeiculo):
    def criar_veiculo(self, modelo):
        return Moto(modelo)

# Fábrica Concreta de Barcos
class FabricaDeBarcos(FabricaDeVeiculo):
    def criar_veiculo(self, modelo):
        return Barco(modelo)

# Uso do Factory Method
fabrica_de_carros = FabricaDeCarros()
carro1 = fabrica_de_carros.criar_veiculo('SUV')
carro2 = fabrica_de_carros.criar_veiculo('4x4')
carro1.mostrar_detalhes()
carro2.mostrar_detalhes()

fabrica_de_motos = FabricaDeMotos()
moto = fabrica_de_motos.criar_veiculo('Esportivo')
moto.mostrar_detalhes()

fabrica_de_barcos = FabricaDeBarcos()
barco = fabrica_de_barcos.criar_veiculo('Náutico')
barco.mostrar_detalhes()