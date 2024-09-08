class Pizza {
    constructor(sabor, preco, tamanho, borda, ingredEx, ingredOpt) {
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho;
        this.borda = borda;
        this.ingredEx = ingredEx;
        this.ingredOpt = ingredOpt;
    }

    clone() {
        return new Pizza(this.sabor, this.preco, this.tamanho, this.borda, this.ingredEx, this.ingredOpt);
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
        this.cardapio[sabor] = new Pizza(sabor, preco, tamanho, borda, ingredEx, ingredOpt);//baseado no sabor e adicionado os outros elementos como preço
        console.log(this.cardapio);
        
    }

    fazerPedido(cliente, sabores,tamanhos, bordas, ingredExs, ingredOpts) {
        const pizzas = []
        
        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                let pizza = this.cardapio[sabor];
                
                if (tamanhos.includes(pizza.tamanho)) {
                    pizzas.push(pizza.clone());
                } else {
                    console.log(`desculpa ${this.nome} não oferece o tamanho ${pizza.tamanho} para a pizza ${sabor}\n`);
                }
                if (bordas.includes(pizza.borda)) {
                    pizzas.push(pizza.clone());
                } else {
                    console.log(`desculpa ${this.nome} não oferece a borda ${pizza.borda} para a pizza ${sabor}\n`);
                }
                if (ingredExs.includes(pizza.ingredEx)) {
                    pizzas.push(pizza.clone());
                } else {
                    console.log(`desculpa ${this.nome} não oferece o ingrediente extra ${pizza.ingredEx} para a pizza ${sabor}\n`);
                }
                if (ingredOpts.includes(pizza.ingredOpt)) {
                    pizzas.push(pizza.clone());
                } else {
                    console.log(`desculpa ${this.nome} não oferece o ingrediente opcional ${pizza.ingredOpt} para a pizza ${sabor}\n`);
                }
            } else {
                console.log(`desculpa ${this.nome} não oferece a pizza ${sabor}\n`);
            }
        });
        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`pedido recebido de  ${cliente}\n`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} R$ ${pizza.preco.toFixed(2)}\n`);
                
            })
            console.log(`Total: R$ ${pedido.calcularTotal().toFixed(2)}\n`);
        }
    }
}

const minhaPizzaria = new Pizzaria("Minha Pizzaria");
minhaPizzaria.adicionarPizza("Frango",38,"grande","sem borda",["frango", "cebola"],["coentro"]);
// minhaPizzaria.adicionarPizza("Frango2",48,"pequeno","Tradicional",["frango", "cebola"],["coentro"]);
// minhaPizzaria.adicionarPizza("Cogumelos e Alho",33,"médio","normal",["cogumelos", "alho"],["salsinha"]);
// minhaPizzaria.adicionarPizza("Salsicha Picante",36,"padrão","recheada",["salsicha picante", "pimenta"],["cebola", "alface"]);
// minhaPizzaria.adicionarPizza("Havaiana", 40, "grande", "normal", ["presunto", "abacaxi"], ["orégano"]);
// minhaPizzaria.adicionarPizza("Veggie Picante", 34, "médio", "sem borda", ["pimentão", "jalapeño"], ["cebola", "milho"]);
// minhaPizzaria.adicionarPizza("Quatro Queijos", 45, "padrão", "recheada", ["mozzarella", "parmesão", "gorgonzola", "emmental"], ["orégano", "manjericão"]);


minhaPizzaria.fazerPedido("Ana Costa", ["Frango"],  ["grande"] , ["sem borda"] , ["frango"], ["coentro"]);
//minhaPizzaria.fazerPedido("Ana Costa", ["Frango", "Frango"], ["grande", "grande"], ["sem borda", "sem borda"], ["frango", "frango"], ["coentro"]);
//minhaPizzaria.fazerPedido("Ana Costa", ["Havaiana", "Quatro Queijos"], ["grande", "padrão"], ["normal", "recheada"], ["presunto", "abacaxi"], ["orégano"]);
// minhaPizzaria.fazerPedido("Lucas Almeida", ["Veggie Picante", "Havaiana"], ["médio", "grande"], ["sem borda", "normal"], ["pimentão", "jalapeño"], ["cebola", "alface"]);
// minhaPizzaria.fazerPedido("Fernanda Lima", ["Quatro Queijos", "Frango"], ["padrão", "grande"], ["recheada", "normal"], ["frango", "cebola"], ["coentro"]);
// minhaPizzaria.fazerPedido("Bruno Martins", ["Veggie Picante", "Salsicha Picante"], ["médio", "padrão"], ["normal", "sem borda"], ["brócolis", "cenoura"], ["milho", "tomate"]);
// minhaPizzaria.fazerPedido("Patrícia Souza", ["Quatro Queijos", "Cogumelos e Alho"], ["grande", "médio"], ["normal", "recheada"], ["mozzarella", "parmesão"], ["orégano", "manjericão"]);
// minhaPizzaria.fazerPedido("Eduardo Pereira", ["Havaiana", "Pepperoni"], ["padrão", "médio"], ["sem borda", "normal"], ["presunto", "abacaxi"], ["cebola", "salsinha"]);