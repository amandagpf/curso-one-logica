function pulaLinha(){
    document.write("<br><br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

//calcular IMC é peso/(altura * altura)


var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var resultado = document.getElementById('resultado');

var calcularImc = document.getElementById('calcular')
calcularImc.addEventListener('click', calculado)

function calculado(){
    resultado.innerHTML = parseFloat(peso.value)/(parseFloat(altura.value)*parseFloat(altura.value))
}