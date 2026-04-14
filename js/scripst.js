import isCNPJ from "./valida-cnpj.js";
import checkEmail from "./valida-email.js";

const camposDoFormulario = document.querySelectorAll('[required]');


function verificaCampo(campo) {
    if (campo.name == "cnpj") {
        if (!isCNPJ(campo)) {
            campo.nextElementSibling.textContent = "Este não é um CNPJ válido!";            
        } else {
            campo.nextElementSibling.textContent = null;
        }
    }
    if (campo.name == "email") {
        if (!checkEmail(campo)) {
            campo.nextElementSibling.textContent = "Este não é um email válido!";            
        } else {
            campo.nextElementSibling.textContent = null;
        }
    }
    if (["nome", "assunto", "mensagem"].includes(campo.name)) {
        console.log("hguydagl")
        if (campo.value.length < 3) {
            campo.nextElementSibling.textContent = "O texto deve possuir pelo menos três caracteres!";            
        } else {
            campo.nextElementSibling.textContent = null;
        }
    }    
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})


let mensagem = '';
