//Adiconar paciente

function obtemIformacao(form) {
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTR(paciente) {
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    //afiliando os elementos
    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));

    return pacienteTR;
}

function adicionaPacienteNaTabela(paciente) {
    var paciente = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(paciente);
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Verificar nome");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Verificar peso");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Verificar altura");
    }

    if(paciente.gordura.length == 0) {
        erros.push("Verificar gordura corporal");
    }

    return erros;
}

function exibeMensagemErro(erros) {
    var mensagem = document.querySelector("#mensagem-erro");

    mensagem.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        mensagem.appendChild(li);

        li.textContent = erro;
        li.classList.add("mensagem-erro--active");
    });
}

function adicionaPaciente(event) {
    event.preventDefault();
    
    //extração das informações inseridas no formulário
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemIformacao(form);

    var pacienteTR = montaTR(paciente);

    var erros = validaPaciente(paciente);
    if(erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    var mensagem = document.querySelector("#mensagem-erro");
    mensagem.innerHTML = "";

    form.reset();

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", adicionaPaciente);
