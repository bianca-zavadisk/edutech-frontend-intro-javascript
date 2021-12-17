// Cálculo IMC
function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}

function calculaIMC1() {
    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var IMC;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValidado = validaPeso(peso);
    var alturaValidada = validaPeso(altura);

    if(!pesoValidado) {
        tdIMC.textContent = "Verificar peso";
        paciente.classList.add("valor-invalido"); //pinta a linha de vermelho caso tenha erro de validação
    } else if(!alturaValidada) {
        tdIMC.textContent = "Verificar altura";
        paciente.classList.add("valor-invalido");
    } else {
        IMC = calculaIMC(peso, altura);
        tdIMC.textContent = IMC;
    }
}

function validaPeso(peso) {
    if(0 < peso && peso <= 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(0 < altura && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    calculaIMC1();
}