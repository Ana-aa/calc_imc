document.getElementById("calc").addEventListener("click", calcularIMC);

    function calcularIMC(){

    const peso = parseFloat(document.getElementById('kg').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; 
    const resultado_div = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("O valor inserido não é válido");
        return;
    }

    const imc = peso / (altura * altura);
    let classi = ''

    if (imc<18.5){
        classi = 'Abaixo do peso';
    } else if (imc < 24.9){
        classi = 'Peso normal';
    } else if (imc < 29.9){
        classi = 'Sobrepeso';
    } else if (imc < 34.9){
        classi = 'Obesidade grau 1';
    } else if (imc < 39.9){
        classi = 'Obesidade grau 2';
    } else {
        classi = 'Obesidade grau 3';
    }
    
    
    const resultadoDiv = document.getElementById("resultado");
    resultado_div.classList.remove("oculto");
    resultado_div.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)} <br> Classificação: ${classi} </p>`;
};

document.getElementById("reset").addEventListener("click", function() {
    document.querySelector('input[name="kilogram"]').value = '';
    document.querySelector('input[name="height"]').value = '';
    document.getElementById("resultado").classList.add("oculto");
});