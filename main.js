let net;

const imgEl = document.getElementsByClassName("image");
let descEl = document.getElementById("desc");
console.log("image: ", imgEl);
console.log("image on load ", imgEl.onload);

imgEl.onload = async function () {
    /*  net = await mobilenet.load();
 
     var result = await net.classify(imgEl);
     console.log(result);
 
     descEl.innerHTML = result[0].className; */
    displayImagePrediction();
}



async function displayImagePrediction() {
    try {
        result = await net.classify(imgEl);
        console.log(result);
        descEl.innerHTML = JSON.stringify(result);
    } catch (error) {
        console.error(error);
    }
}

let count = 0;
async function cambiarImagen() {
    count++;
    //imgEl.src = `https://placekitten.com/${count}/${count}`;
    imgEl.src = `https://picsum.photos/200/300?random=${count}`

    displayImagePrediction();
}

//https://picsum.photos/200/300?random=0 

async function app() {
    net = await mobilenet.load();

    var result = await net.classify(imgEl);
    console.log(result);
    //displayImagePrediction();
    
    imgEl.onload = async () => {
        net = await mobilenet.load();
    
        var result = await net.classify(imgEl);
        console.log(result);
    
        descEl.innerHTML = result[0].className;
    }
}

app();