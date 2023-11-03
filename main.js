let net;
const imgEl = document.getElementsByClassName("image")[0]; // Selecciona el primer elemento de la colección
let descList = document.getElementById("desc");


const descContainer = document.createElement("div");
async function app() {
    net = await mobilenet.load();
    var result = await net.classify(imgEl);
    console.log(result);
    //descEl.innerHTML = result[0].className;
}


async function displayImagePrediction() {
    try {
        var result = await net.classify(imgEl);
        //descEl.innerHTML = JSON.stringify(result);
        //name1.innerHTML = result[0].className;    
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
