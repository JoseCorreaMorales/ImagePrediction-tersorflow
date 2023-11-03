let net;
const imgEl = document.getElementsByClassName("image")[0]; // Selecciona el primer elemento de la colección
let descList = document.getElementById("desc");


const descContainer = document.createElement("div");
async function app() {
    try {
        net = await mobilenet.load();
    } catch (error) {
        console.error("Error al cargar el modelo MobileNet:", error);
        alert("El modelo no ha sido cargado aun.");
    }
}


async function displayImagePrediction() {
    if (net) {
        try {
            var result = await net.classify(imgEl);
            let data = JSON.parse(JSON.stringify(result));
            console.log(data);

            descContainer.innerHTML = `
            <div class="prediction">
                <p class="name"> <span>Nombre</span>: ${data[0].className}</p>
                <p class="probability"><span>Probabilidad</span>: ${data[1].probability}</p>
            </div>
            `;

            descList.appendChild(descContainer);
        } catch (error) {
            console.error("Error al realizar la clasificación:", error);
        }
    } else {
        console.error("El modelo MobileNet no ha sido cargado aún.");
        alert("El modelo no ha sido cargado aun.");
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
