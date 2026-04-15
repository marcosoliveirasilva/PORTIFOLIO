const modal = document.getElementById("cameraModal");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

let stream;

export async function abrirCamera() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (erro) {
        alert("Não foi possível acessar a câmera.");
        console.error(erro);
    }
}

export function fecharCamera() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");

    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
}

export function capturarFoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    return canvas.toDataURL("image/png");
}