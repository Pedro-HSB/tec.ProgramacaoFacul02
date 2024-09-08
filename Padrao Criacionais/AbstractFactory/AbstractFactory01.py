# Interface da Fabrica Abstrata:
class FabricaAbstrata:
    def criaProdutoA(self):
        pass
    def criaProdutoB(self):
        pass
    def criaProdutoC(self):
        pass

# Fabrica Concreta 1 - Cria Produtos do Tipo A, B e C:
class FabricaConcreta1(FabricaAbstrata):
    def criaProdutoA(self):
        return ProdutoConcretoA1()
    
    def criaProdutoB(self):
        return ProdutoConcretoB1()
    
    def criaProdutoC(self):
        return ProdutoConcretoC1()

# Fabrica Concreta 2 - Cria Produtos do Tipo A, B e C:
class FabricaConcreta2(FabricaAbstrata):
    def criaProdutoA(self):
        return ProdutoConcretoA2()
    
    def criaProdutoB(self):
        return ProdutoConcretoB2()
    
    def criaProdutoC(self):
        return ProdutoConcretoC2()

# Interface dos Produtos do Tipo A:
class ProdutoAbstratoA:
    def metodoA(self):
        pass

# Implementação Concreta do Produto do Tipo A - Fabrica 1:
class ProdutoConcretoA1(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fabrica 1"

# Implementação Concreta do Produto do Tipo A - Fabrica 2:
class ProdutoConcretoA2(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fabrica 2"

# Interface dos Produtos do Tipo B:
class ProdutoAbstratoB:
    def metodoB(self):
        pass

# Implementação Concreta do Produto do Tipo B - Fabrica 1:
class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fabrica 1"

# Implementação Concreta do Produto do Tipo B - Fabrica 2:
class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fabrica 2"

# Interface dos Produtos do Tipo C:
class ProdutoAbstratoC:
    def metodoC(self):
        pass

# Implementação Concreta do Produto do Tipo C - Fabrica 1:
class ProdutoConcretoC1(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fabrica 1"

# Implementação Concreta do Produto do Tipo C - Fabrica 2:
class ProdutoConcretoC2(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fabrica 2"

# Função para Demonstrar o Padrão Abstract Factory:
def codigoCliente(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()
    produtoC = factory.criaProdutoC()

    print(produtoA.metodoA())
    print(produtoB.metodoB())
    print(produtoC.metodoC())

# Exemplo de Uso da 1 Fabrica:
factory1 = FabricaConcreta1()
codigoCliente(factory1)

# Exemplo de Uso da 2 Fabrica:
factory2 = FabricaConcreta2()
codigoCliente(factory2)
