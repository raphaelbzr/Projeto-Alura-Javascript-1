var peso = document.getElementById("peso-1").textContent; // pega o peso do paciente
var altura = document.getElementById("altura-1").textContent; // pega a altura do paciente
var nome = document.getElementById("nome-1").textContent; // pega o nome do paciente

var paciente = {
    peso : peso,
    altura : altura,
    nome : nome
}

if(paciente.altura != 0){
    var imc = paciente.peso / (paciente.altura * paciente.altura);
    console.log(imc);
}else{
    console("Não posso executar uma divisão por 0!");
}