let net;
const imgEl = document.getElementsByClassName("image")[0];
let descList = document.getElementById("desc");
const webCamElement = document.getElementById('webcam');
const classifier = knnClassifier.create();
const descContainer = document.createElement("div");
let changeImg = document.getElementById("change-img");
let console2 = document.getElementById("console2");
let consoleP = document.getElementById("console");


const addWordButton = document.getElementById("add-word-button");
const addWordInput = document.getElementById("add-word-input");

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
    console.log(classifierData)
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
        console.log(classifierData);
    } else {
        console.error("Error al cargar el clasificador");
    }

};

/* 
async function addWord(event) {
    event.preventDefault();
    const word = addWordInput.value;
    if (word) {
        await addExample(word);
        await saveClassifier();
        toastr.success('¡Palabra agregada correctamente!', "", {
            "positionClass": "toast-top-left",
            "closeButton": true,
            "progressBar": true,
            "timeOut": "10000"
        });
    } else {
        toastr.error('¡No se ha ingresado ninguna palabra!', "", {
            "positionClass": "toast-top-left",
            "closeButton": true,
            "progressBar": true,
            "timeOut": "10000"
        });
    }
}
*/

let activeBtn = 0;
async function app() {
    try {
        net = await mobilenet.load();
        if (net) {
            toastr.success('El modelo ha sido cargado correctamente.', {
                "positionClass": "toast-bottom-right",
                "closeButton": true,
                "progressBar": true,
            });
            activeBtn = 1;

            //await loadClassifier();
        }
        if (activeBtn == 1) {
            changeImg.style.setProperty("background-color", "var(--color-secondary)");
        }/* 
        if (numExamples === 0) {
            console.error("Error: No examples added to the KNN classifier.");
            return;
        } */
    } catch (error) {
        console.error("Error al cargar el modelo MobileNet:", error);
    }
    webcam = await tf.data.webcam(webCamElement);

    await addExample(1);
    await addExample(2);
    await addExample(3);
    await addExample(4);
    //addWordButton.addEventListener("click", addWord);
    while (true) {
        const img = await webcam.capture();
        const result = await net.classify(img);
        const activation = net.infer(img, "conv_preds");
        let result2;
        try {
            result2 = await classifier.predictClass(activation);
            /*const dataset = [];
            const example = { image: img, label: "Untrained" };
            ataset.push(example);
            await classifier.setClassifierDataset(dataset); */
            const clases = ["Untrainded", "Jose", "Ok", "Rock", "Iphone"];
            //const clases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            console2.innerHTML = 
            `
            <p class="console-prediction"><span>Es: </span> ${result2.label}</p>
            `;
            /*
            const res = await fetch(`http://localhost:3000/classifier/${clases[result2.label]}`);
            if (res.ok) {
                const data = await res.json();
                if (data && data.length > 0) {
                    toastr.success(`¡Postura reconocida: ${clases[result2.label]}!`, "", {
                        "positionClass": "toast-top-left",
                        "closeButton": true,
                        "progressBar": true,
                        "timeOut": "10000"
                    });
                }
            }
            */
        } catch (error) {
            console.log(error, "modelo no configura aún...", error);
        }
        consoleP.innerHTML =
         `
        <p class=console-prediction><span>Predición: </span>${result[0].className} </p>
        <p class=console-prediction><span>Probabilidad: </span>${result[0].probability} </p>
        `
        img.dispose();
        await tf.nextFrame();
    }
}

const buttons = document.getElementsByClassName("letter");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const classId = buttons[i].textContent;
    addExample(classId);
  });
}



async function displayImagePrediction() {
    if (net) {
        try {
            var result = await net.classify(imgEl);
            let data = JSON.parse(JSON.stringify(result));
            console.log(data);
            descContainer.innerHTML =
             `
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
        toastr.error('¡El modelo MobileNet no ha sido cargado aún!', "", {
            "positionClass": "toast-top-left",
            "closeButton": true,
            "progressBar": true,
            "timeOut": "1000"
        });
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
window.addEventListener("load", app);
























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