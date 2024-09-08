function calcularIMC() {

    const peso = Number(document.getElementById("peso").value);

    let recAltura = Number(document.getElementById("altura").value);
    const altura = parseInt(recAltura)
    
    

        const imc = peso / ((altura/100) * (altura/100));

        const resultadoIMC = document.getElementById("resul");
    
        resultadoIMC.textContent = "O seu IMC é: " + imc.toFixed(2);

        // const resultadoIMC = document.getElementById("resul");
        // resultadoIMC.textContent = "valor da altura incorreto ";
    

}
