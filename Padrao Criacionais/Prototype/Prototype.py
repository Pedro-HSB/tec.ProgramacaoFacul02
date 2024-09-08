import copy

#Classe Pessoa a ser clonada
class Pessoa:
    def __init__(self, id , nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade
    #Metodos clone para realizar uma copia de objeto
    def clone(self):
        def __init__(self):
    #Classe GErenciamento para gerenciar instancias de Pessoas
class GerenciaPessoa:
        def __inti__(self):
            self.pessoas = {}
        #Adicionar nova pessoa no dicionario de Pessoa
        def AdicionarPessoas(self, idade, nome):
            pessoa = Pessoa(id, nome , idade)
            self.pessoas[id] = pessoa
        #Solicitar uma pessoa pelo id e retorna uma copia
        def getPessoa(self, id):
            pessoaOriginal = self.pessoa.get(id)
            if pessoaOriginal:
                return pessoaOriniginal.clone()
                else:
                    return None
    #Criando uma instancia de GerenciaPessoa
gerencia = GerenciaPessoa()

#Adicionando pessoas
gerenciamento.adicionarPessoa(1, 'João', 25)
gerenciamento.adicionarPessoa(2, 'João de segundo', 30)
gerenciamento.adicionarPessoa(3, 'joao de terceira', 50)

    #Clonando pessoas e modificar informaçoes
pessoaClone1 = gerencia.getPessoasByid(1)
    if pessoasClone1:
        pessoaClone1.nome = 'Juaozzin'

#Exibindo pessoas:
print("---------Pessoas Oringinal----------")
print(gerncia.getPessoasByid(1).__dict__)
print(gerncia.getPessoasByid(2).__dict__)
print(gerncia.getPessoasByid(3).__dict__)

print('---------Pessoas Clonadas----------')
print(pessoaClone1__dict__)


