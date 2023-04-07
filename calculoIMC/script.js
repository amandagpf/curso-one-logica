function pulaLinha(){
    document.write("<br><br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}

//calcular IMC é peso/(altura * altura)

function calculaImc(peso, altura){
    // var imc = peso/(altura * altura);
    // return imc;
    return peso/(altura * altura);
}

var nome = prompt('Qual o seu nome?')
var pesoInformado = prompt(`Olá, ${nome}, por gentileza, digite o seu peso.`)
var alturaInformada = prompt(`${nome}, digite a sua altura, por favor.`)

var imc = calculaImc(pesoInformado, alturaInformada);

document.write(`O IMC informado é ${imc}`);
pulaLinha();

if(imc < 18.5){
    mostra("Você está abaixo do recomendado.")
}else if(imc >= 18.5 && imc <=35){
    mostra("Seu imc está saudável")
}else if(imc > 35){
    mostra("Voê está acima do peso.")
}