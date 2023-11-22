let net;
const imgEl = document.getElementsByClassName("image")[0];
let descList = document.getElementById("desc");
const webCamElement = document.getElementById('webcam');
const classifier = knnClassifier.create();
const descContainer = document.createElement("div");

toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "3000",
    "hideDuration": "1000",
    "timeOut": "10000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

toastr.success('¡Bienvenido! espera, el modelo aún esta cargado...', "", {
    "positionClass": "toast-top-left",
    "closeButton": true,
    "progressBar": true,
    "timeOut": "10000"
});


async function addExample(classId) {
    const img = await webcam.capture();
    const activation = net.infer(img, true);

    classifier.addExample(activation, classId);
    img.dispose();
    // await saveClassifier();
}

async function saveClassifier() {
    const classifierData = classifier.getClassifierDataset();

    await fetch("http://localhost:3000/classifier", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(classifierData),
    });
};

const loadClassifier = async () => {
    const res = await fetch("localhost:3000/classifier");
    if (res.ok) {
        const classifierData = await res.json();
        classifier.setClassifierDataset(classifierData);
    } else {
        console.error("Error al cargar el clasificador");
    }

};

async function app() {
    try {
        net = await mobilenet.load();
        if (net) {
            toastr.success('El modelo ha sido cargado correctamente.', {
                "positionClass": "toast-bottom-right",
                "closeButton": true,
                "progressBar": true,
            });
        }
    } catch (error) {
        console.error("Error al cargar el modelo MobileNet:", error);
    }
    webcam = await tf.data.webcam(webCamElement);
    await addExample(1);/* jose */
    await addExample(2);/* Ok */
    await addExample(3);/* Rock */
    await addExample(4);/* Iphone */

    while (true) {
        const img = await webcam.capture();
        const result = await net.classify(img);
        const activation = net.infer(img, "conv_preds");
        let result2;
        try {
            result2 = await classifier.predictClass(activation);
            const clases = ["Untrainded", "Jose", "Ok", "Rock", "Iphone"];
            /* document.getElementById("console2").innerText = clases[result2.label]; */
            document.getElementById("console2").innerHTML = `<p class="console-prediction"><span>Es: </span> ${clases[result2.label]}</p>`;

        } catch (error) {
            console.log(error, "modelo no configura aún...", error);
        }

        document.getElementById("console").innerHTML = 'Prediccion ' + result[0].className + "Probabilidad " + result[0].probability
        img.dispose();

        await tf.nextFrame();
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
    imgEl.src = `https://picsum.photos/500/300?random=${count}`;
    imgEl.onload = async () => {
        displayImagePrediction();
    }
}

window.onload = app; // Llamar a app() después de cargar la página
//loadClassifier().then(app);
//window.onload = loadClassifier.then(app); // Llamar a app() después de cargar la página

/* let dataset = classifier.getClassifierDataset();
let datasetObj = {};
Object.keys(dataset).forEach((key) => {
    let data = dataset[key].dataSync();
    datasetObj[key] = Array.from(data);
});
let jsonStr = JSON.stringify(datasetObj);
localStorage.setItem("myData", jsonStr); */
