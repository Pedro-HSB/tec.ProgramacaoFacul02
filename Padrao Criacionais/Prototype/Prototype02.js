class Pizza {
    constructor(sabor, preco, tamanho, borda, ingredEx, ingredOp) {
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho;
        this.borda = borda;
        this.ingredEx = ingredEx;
        this.ingredOp = ingredOp;
    }

    clone() {
        return new Pizza(this.sabor, this.preco, this.tamanho, this.borda, this.ingredEx, this.ingredOp);
    }
}

class PedidoPizza {
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calcularTotal() {
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
}

class Pizzaria {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    }

    adicionarPizza(sabor, preco, tamanho, borda, ingredEx, ingredOpt) {
        this.cardapio[sabor] = new Pizza(sabor, preco, tamanho, borda, ingredEx, ingredOpt);
    }

    fazerPedido(cliente, sabores, tamanhos, bordas, ingredExs, ingredOpts) {
        const pizzas = []
        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone());
            }
            else {
                console.log(`desculpa ${this.nome} não oferece a pizza\n`);
            }
        });
        tamanhos.forEach(tamanho => {
            if (this.cardapio.hasOwnProperty(tamanho)) {
                pizzas.push(this.cardapio[tamanho].clone())
            } else {
                console.log(`desculpa ${this.nome} não oferece esse tamanho de pizza\n`);
            }
        });
        bordas.forEach(borda => {
            if (this.cardapio.hasOwnProperty(borda)){
                pizza.push(this.cardapio[borda].clone())
            } else {
                console.log(`desculpa ${this.nome} não oferece essa borda de pizza\n`);
            }
        });
        ingredExs.forEach(ingredEx => {
            if (this.cardapio.hasOwnProperty(ingredEx)){
                pizza.push(this.cardapio[ingredEx].clone())
                console.log(`ingredite extra adicionado\n`);
            } else {
                console.log(`desculpa ${this.nome} não oferece esse ingredite extra\n`);
            }
        });
        ingredOpts.forEach(ingredOpt => {
            if (this.cardapio.hasOwnProperty(ingredOpt)){
                pizza.push(this.cardapio[ingredOpt].clone())
                console.log(`ingredite opcional adicionado\n`);
            } else {
                console.log(`desculpa ${this.nome} não oferece esse ingredite opcional\n`);
            }
        });
        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`pedido recebido de  ${cliente}`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} R$ ${pizza.preco.toFixed(2)}\n`);
            })
            console.log(`Total: R$ ${pedido.calcularTotal().toFixed(2)}\n`);
            console.log(pizzas)
        }
    }
}

const minhaPizzaria = new Pizzaria("Minha Pizzaria");
minhaPizzaria.adicionarPizza("Frango",38,"grande");
// minhaPizzaria.adicionarPizza("Frango",38,"grande","sem borda",["frango", "cebola"],["coentro"]);
// minhaPizzaria.adicionarPizza("Frango2",48,"pequeno","Tradicional",["frango", "cebola"],["coentro"]);
// minhaPizzaria.adicionarPizza("Cogumelos e Alho",33,"médio","normal",["cogumelos", "alho"],["salsinha"]);
// minhaPizzaria.adicionarPizza("Salsicha Picante",36,"padrão","recheada",["salsicha picante", "pimenta"],["cebola", "alface"]);
// minhaPizzaria.adicionarPizza("Havaiana", 40, "grande", "normal", ["presunto", "abacaxi"], ["orégano"]);
// minhaPizzaria.adicionarPizza("Veggie Picante", 34, "médio", "sem borda", ["pimentão", "jalapeño"], ["cebola", "milho"]);
// minhaPizzaria.adicionarPizza("Quatro Queijos", 45, "padrão", "recheada", ["mozzarella", "parmesão", "gorgonzola", "emmental"], ["orégano", "manjericão"]);

minhaPizzaria.fazerPedido("Ana Costa", ["Frango"],  ["grande"]);
// minhaPizzaria.fazerPedido("Ana Costa", ["Frango"],  ["grande"] , ["sem borda"] , ["frango"], ["coentro"]);
//minhaPizzaria.fazerPedido("Ana Costa", ["Frango", "Frango"], ["grande", "grande"], ["sem borda", "sem borda"], ["frango", "frango"], ["coentro"]);
//minhaPizzaria.fazerPedido("Ana Costa", ["Havaiana", "Quatro Queijos"], ["grande", "padrão"], ["normal", "recheada"], ["presunto", "abacaxi"], ["orégano"]);
// minhaPizzaria.fazerPedido("Lucas Almeida", ["Veggie Picante", "Havaiana"], ["médio", "grande"], ["sem borda", "normal"], ["pimentão", "jalapeño"], ["cebola", "alface"]);
// minhaPizzaria.fazerPedido("Fernanda Lima", ["Quatro Queijos", "Frango"], ["padrão", "grande"], ["recheada", "normal"], ["frango", "cebola"], ["coentro"]);
// minhaPizzaria.fazerPedido("Bruno Martins", ["Veggie Picante", "Salsicha Picante"], ["médio", "padrão"], ["normal", "sem borda"], ["brócolis", "cenoura"], ["milho", "tomate"]);
// minhaPizzaria.fazerPedido("Patrícia Souza", ["Quatro Queijos", "Cogumelos e Alho"], ["grande", "médio"], ["normal", "recheada"], ["mozzarella", "parmesão"], ["orégano", "manjericão"]);
// minhaPizzaria.fazerPedido("Eduardo Pereira", ["Havaiana", "Pepperoni"], ["padrão", "médio"], ["sem borda", "normal"], ["presunto", "abacaxi"], ["cebola", "salsinha"]);