let net;
const imgEl = document.getElementsByClassName("image")[0]; // Selecciona el primer elemento de la colección
let descEl = document.getElementById("desc");

async function app() {
    net = await mobilenet.load();
    var result = await net.classify(imgEl);
    console.log(result);
    descEl.innerHTML = result[0].className;
}

async function displayImagePrediction() {
    try {
        var result = await net.classify(imgEl);
        console.log(result);
        descEl.innerHTML = JSON.stringify(result);
    } catch (error) {
        console.error(error);
    }
}

let count = 0;
async function cambiarImagen() {
    count++;
    imgEl.src = `https://picsum.photos/200/300?random=${count}`;
    imgEl.onload = async () => {
        displayImagePrediction();
    }
}

window.onload = app; // Llamar a app() después de cargar la página
