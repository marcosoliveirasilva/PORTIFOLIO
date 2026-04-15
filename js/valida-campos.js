import isCNPJ from "./valida-cnpj.js";
import checkEmail from "./valida-email.js";

export function verificaCampo(campo) {
    let mensagemErro = null;

    if (campo.name === "cnpj" && !isCNPJ(campo)) {
        mensagemErro = "Este não é um CNPJ válido!";
    } else if (campo.name === "email" && !checkEmail(campo)) {
        mensagemErro = "Este não é um email válido!";
    } else if (["nome", "assunto", "mensagem"].includes(campo.name) && campo.value.length < 3) {
        mensagemErro = "O texto deve possuir pelo menos três caracteres!";
    }

    const spanErro = campo.nextElementSibling;
    
    if (mensagemErro) {
        spanErro.textContent = mensagemErro;
    } else {
        spanErro.textContent = "";
    }
}

export function validarFormularioInteiro(camposDoFormulario) {
    let formValido = true;

    camposDoFormulario.forEach((campo) => {
        verificaCampo(campo);
        if (campo.nextElementSibling.textContent) {
            formValido = false;
        }
    });

    return formValido;
}