var nome1 = document.getElementById('nome-1').textContent;
var peso1 = document.getElementById('peso-1').textContent;
var altura1 = document.getElementById('altura-1').textContent;

var paciente1 = {
	"nome": nome1,
	"peso": peso1,
	"altura": altura1
}

var nome2 = document.getElementById('nome-2').textContent;
var peso2 = document.getElementById('peso-2').textContent;
var altura2 = document.getElementById('altura-2').textContent;

var paciente2 = {
	"nome": nome2,
	"peso": peso2,
	"altura": altura2
}

var pacientes = [paciente1, paciente2];

for(var posicaoAtual = 0; posicaoAtual <= pacientes.length - 1; posicaoAtual++){

    var pacienteAtual = pacientes[posicaoAtual];
    if(pacienteAtual.altura != 0){
        var imcDoPacienteAtual = pacienteAtual.peso / (pacienteAtual.altura * pacienteAtual.altura);
        console.log(imcDoPacienteAtual) // 25
    }else{
        console("Não posso executar uma divisão por 0!");
    }
}