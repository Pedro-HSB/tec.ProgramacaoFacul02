//Criando a função de calculo de IMC
function calcularIMC(){

    //Acessando as variáveis com DOM e convertendo para o tipo Number(inteiro)
    //Quando for input e button, SEMPRE lembrar de acessar com o .value
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    //Calculando o IMC com a fórmula(peso em kg e altura em metros)
    const imc = peso / (altura * altura);
    const resultadoIMC = document.getElementById("resultado-imc");

    //textContent é o que tiver escrito dentro da tag <p>
    //O toFixed() serve para limitar a duas casas decimais
    resultadoIMC.textContent = "O seu IMC é: " + imc.toFixed(2);
}

