class Pessoa{
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

class GerenciamentoPessoa{
    constructor(){
        this.pessoas = {};
    }

    adicionarPessoa(id, nome, idade){
        const pessoas = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoas;
    }

    getPessoaById(id){
        const pessoaOriginal = this.pessoas[id];
        if(!pessoaOriginal) {
            return null;
        }else{
            return pessoaOriginal.clone();
        }
    }
}


const gerenciamento = new GerenciamentoPessoa();


gerenciamento.adicionarPessoa(1, 'João', 25);
gerenciamento.adicionarPessoa(2, 'João de segundo', 30);
gerenciamento.adicionarPessoa(3, 'joao de terceira', 50);

const pessoaClone1 = gerenciamento.getPessoaById(1);

if (pessoaClone1){
    pessoaClone1.nome = "reinaldo"
}

console.log("Pessoa Original")
console.log(gerenciamento.getPessoaById(1));
console.log(gerenciamento.getPessoaById(2));
console.log(gerenciamento.getPessoaById(3));

console.log("Pessoa Clonada")
console.log(pessoaClone1);