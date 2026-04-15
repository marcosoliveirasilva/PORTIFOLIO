import { verificaCampo, validarFormularioInteiro } from "./valida-campos.js";
import { abrirCamera, fecharCamera, capturarFoto } from "./camera.js";

const form = document.getElementById("formMessage");
const camposDoFormulario = document.querySelectorAll('[required]');
const captureBtn = document.getElementById("captureBtn");
const cancelBtn = document.getElementById("cancelBtn");

let fotoBase64 = null;

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

cancelBtn.addEventListener("click", fecharCamera);

captureBtn.addEventListener("click", () => {
    fotoBase64 = capturarFoto();
    fecharCamera();
    enviarFormulario();
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validarFormularioInteiro(camposDoFormulario)) {
        alert("Preencha corretamente os campos!");
        return;
    }

    await abrirCamera();
});

function enviarFormulario() {
    const dados = {
        nome: form.nome.value,
        cnpj: form.cnpj.value,
        email: form.email.value,
        assunto: form.assunto.value,
        mensagem: form.mensagem.value,
        foto: fotoBase64
    };

    setTimeout(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
        fotoBase64 = null;
    }, 1000);
}