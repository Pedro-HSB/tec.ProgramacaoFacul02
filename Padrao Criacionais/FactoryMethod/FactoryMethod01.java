public class FactoryMethod01 {

    // Classe base de veículo
    public abstract static class Veiculo {
        private String modelo;

        public Veiculo(String modelo) {
            this.modelo = modelo;
        }

        public void mostrarDetalhes() {
            System.out.println("Modelo: " + modelo);
        }
    }

    // Subclasses de veículos
    public static class Carro extends Veiculo {
        public Carro(String modelo) {
            super(modelo);
        }
    }

    public static class Moto extends Veiculo {
        public Moto(String modelo) {
            super(modelo);
        }
    }

    public static class Barco extends Veiculo {
        public Barco(String modelo) {
            super(modelo);
        }
    }

    // Fábrica Abstrata de veículos
    public abstract static class FabricaDeVeiculo {
        public abstract Veiculo criarVeiculo(String modelo);
    }

    // Fábrica Concreta de Carros
    public static class FabricaDeCarros extends FabricaDeVeiculo {
        public Veiculo criarVeiculo(String modelo) {
            return new Carro(modelo);
        }
    }

    // Fábrica Concreta de Motos
    public static class FabricaDeMotos extends FabricaDeVeiculo {
        public Veiculo criarVeiculo(String modelo) {
            return new Moto(modelo);
        }
    }

    // Fábrica Concreta de Barcos
    public static class FabricaDeBarcos extends FabricaDeVeiculo {
        public Veiculo criarVeiculo(String modelo) {
            return new Barco(modelo);
        }
    }

    // Uso do Factory Method
    public static void main(String[] args) {
        FabricaDeVeiculo fabricaDeCarros = new FabricaDeCarros();
        Veiculo carro1 = fabricaDeCarros.criarVeiculo("SUV");
        Veiculo carro2 = fabricaDeCarros.criarVeiculo("4x4");
        carro1.mostrarDetalhes();
        carro2.mostrarDetalhes();

        FabricaDeVeiculo fabricaDeMotos = new FabricaDeMotos();
        Veiculo moto = fabricaDeMotos.criarVeiculo("Esportivo");
        moto.mostrarDetalhes();

        FabricaDeVeiculo fabricaDeBarcos = new FabricaDeBarcos();
        Veiculo barco = fabricaDeBarcos.criarVeiculo("Náutico");
        barco.mostrarDetalhes();
    }
}