// Función para iniciar la detección
async function detectSignLanguage() {
  const video = document.getElementById('hand-video');
  const canvas = document.getElementById('hand-canvas');
  const ctx = canvas.getContext('2d');

  // Cargar el modelo Handpose
  const handposeModel = await handpose.load();
  // Obtener el stream de la cámara
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  // Esperar a que el stream de la cámara se cargue
  video.onloadedmetadata = () => {
    video.play();

    // Iniciar la detección de mano en cada fotograma de video
    detectHandpose(handposeModel, video, ctx);
  };
}


// Función para la detección de mano en cada fotograma
async function detectHandpose(model, video, ctx) {
  // Detectar la mano en cada fotograma
  const predictions = await model.estimateHands(video);

  // Limpiar el lienzo
  ctx.clearRect(0, 0, video.width, video.height);

  // Dibujar los puntos de la mano en el lienzo
  if (predictions.length > 0) {
    const hand = predictions[0].landmarks;

    ctx.fillStyle = 'orange';
    for (let i = 0; i < hand.length; i++) {
      const [x, y] = hand[i];
      ctx.fillRect(x, y, 12, 12);
    }


      if (detectLetterA(hand)) console.log("Letra A detectada");
      if (detectLetterB(hand)) console.log("Letra B detectada");
      if (detectLetterC(hand)) console.log("Letra C detectada");
    

    /*if (detectLetterD(hand)) console.log("Letra D detectada");
    if (detectLetterE(hand)) console.log("Letra E detectada");   
    if (detectLetterF(hand)) console.log("Letra F detectada");     
    if (detectLetterG(hand)) console.log("Letra G detectada");     
    if (detectLetterH(hand)) console.log("Letra H detectada");  
    if (detectLetterI(hand)) console.log("Letra I detectada");    
    if (detectLetterJ(hand)) console.log("Letra J detectada");    
    if (detectLetterK(hand)) console.log("Letra K detectada");    
    if (detectLetterL(hand)) console.log("Letra L detectada");
    if (detectLetterM(hand)) console.log("Letra M detectada");
    if (detectLetterN(hand)) console.log("Letra N detectada");
    if (detectLetterO(hand)) console.log("Letra O detectada");
    if (detectLetterP(hand)) console.log("Letra P detectada");
    if (detectLetterQ(hand)) console.log("Letra Q detectada");
    if (detectLetterR(hand)) console.log("Letra R detectada");
    if (detectLetterS(hand)) console.log("Letra S detectada");
    if (detectLetterT(hand)) console.log("Letra T detectada");
    if (detectLetterU(hand)) console.log("Letra U detectada");
    if (detectLetterV(hand)) console.log("Letra V detectada");
    if (detectLetterW(hand)) console.log("Letra W detectada");
    if (detectLetterX(hand)) console.log("Letra X detectada");
    if (detectLetterY(hand)) console.log("Letra Y detectada");
    if (detectLetterZ(hand)) console.log("Letra Y detectada"); */

  }

  // Repetir el proceso para el siguiente fotograma
  requestAnimationFrame(() => detectHandpose(model, video, ctx));
}


// Función para detectar la forma de la letra "A"
function detectLetterA(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral
  if (thumbTip[1] < heightThreshold) {
    return true;  // Se considera que la letra "A" está formada
  } else {
    return false; // La letra "A" no está formada
  }
}

// Función para detectar la forma de la letra "B"
function detectLetterB(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = [hand[8], hand[12], hand[16], hand[20]];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 80;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral
  if (thumbTip[1] < heightThreshold) {
    return true;  // Se considera que la letra "B" está formada
  } else {
    return false; // La letra "B" no está formada
  }
}

// Función para detectar la forma de la letra "C" (mayúscula)
function detectLetterC(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice está en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice está en una posición lateral
  if (thumbTip[1] < heightThreshold && indexTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "C" está formada
  } else {
    return false; // La letra "C" no está formada
  }
}


// Función para detectar la forma de la letra "D" (mayúscula)
function detectLetterD(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice está en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice está en una posición lateral
  if (thumbTip[1] < heightThreshold && indexTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "D" está formada
  } else {
    return false; // La letra "D" no está formada
  }
}

// Función para detectar la forma de la letra "E" (mayúscula)
function detectLetterE(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "E" está formada
  } else {
    return false; // La letra "E" no está formada
  }
}

// Función para detectar la forma de la letra "F" (mayúscula)
function detectLetterF(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "F" está formada
  } else {
    return false; // La letra "F" no está formada
  }
}

// Función para detectar la forma de la letra "G" (mayúscula)
function detectLetterG(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "G" está formada
  } else {
    return false; // La letra "G" no está formada
  }
}

// Función para detectar la forma de la letra "H" (mayúscula)
function detectLetterH(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "H" está formada
  } else {
    return false; // La letra "H" no está formada
  }
}

// Función para detectar la forma de la letra "I" (mayúscula)
function detectLetterI(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "I" está formada
  } else {
    return false; // La letra "I" no está formada
  }
}

// Función para detectar la forma de la letra "J" (mayúscula)
function detectLetterJ(hand) {
  //el pulgar es el punto 4 en la lista de landmarks
  //verificar si está en una posición elevada
  const thumbTip = hand[4];

  //el índice es el punto 8 en la lista de landmarks
  //verificar si está en una posición lateral
  const indexTip = hand[8];

  //el medio es el punto 12 en la lista de landmarks
  //verificar si está en una posición lateral
  const middleTip = hand[12];

  //el anular es el punto 16 en la lista de landmarks
  //verificar si está en una posición lateral
  const ringTip = hand[16];

  //el meñique es el punto 20 en la lista de landmarks
  //verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  //ajustar este valor según las necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  //ajustar este valor según las necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
    indexTip[0] > lateralThreshold &&
    middleTip[0] > lateralThreshold &&
    ringTip[0] > lateralThreshold &&
    pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "J" está formada
  } else {
    return false; // La letra "J" no está formada
  }
}

function detectLetterK(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "K" está formada
  } else {
    return false; // La letra "K" no está formada
  }
}

// Función para detectar la forma de la letra "L" (mayúscula)
function detectLetterL(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "L" está formada
  } else {
    return false; // La letra "L" no está formada
  }
}
// Función para detectar la forma de la letra "M" (mayúscula)
function detectLetterM(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "M" está formada
  } else {
    return false; // La letra "M" no está formada
  }
}

// Función para detectar la forma de la letra "N" (mayúscula)
function detectLetterN(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "N" está formada
  } else {
    return false; // La letra "N" no está formada
  }
}

// Función para detectar la forma de la letra "U" (mayúscula)
function detectLetterO(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "U" está formada
  } else {
    return false; // La letra "U" no está formada
  }
}

// Función para detectar la forma de la letra "P" (mayúscula)
function detectLetterP(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio y anular están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "P" está formada
  } else {
    return false; // La letra "P" no está formada
  }
}

// Función para detectar la forma de la letra "Q" (mayúscula)
function detectLetterQ(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    // También verifica si el anular está por debajo del pulgar para distinguir la "Q"
    if (ringTip[1] < thumbTip[1]) {
      return true;  // Se considera que la letra "Q" está formada
    }
  }

  return false; // La letra "Q" no está formada
}
// Función para detectar la forma de la letra "R" (mayúscula)
function detectLetterR(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "R" está formada
  } else {
    return false; // La letra "R" no está formada
  }
}
// Función para detectar la forma de la letra "S" (mayúscula)
function detectLetterS(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio y anular están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio y anular están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "S" está formada
  } else {
    return false; // La letra "S" no está formada
  }
}
// Función para detectar la forma de la letra "T" (mayúscula)
function detectLetterT(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio, anular y meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "T" está formada
  } else {
    return false; // La letra "T" no está formada
  }
}

// Función para detectar la forma de la letra "U" (mayúscula)
function detectLetterU(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "U" está formada
  } else {
    return false; // La letra "U" no está formada
  }
}

// Función para detectar la forma de la letra "V" (mayúscula)
function detectLetterV(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el meñique están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      pinkyTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "V" está formada
  } else {
    return false; // La letra "V" no está formada
  }
}

// Función para detectar la forma de la letra "W" (mayúscula)
function detectLetterW(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice y el meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio y anular están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] > lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "W" está formada
  } else {
    return false; // La letra "W" no está formada
  }
}
// Función para detectar la forma de la letra "X" (mayúscula)
function detectLetterX(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio, anular y meñique están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice y el anular están en una posición lateral opuesta
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] < lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "X" está formada
  } else {
    return false; // La letra "X" no está formada
  }
}

// Función para detectar la forma de la letra "Y" (mayúscula)
function detectLetterY(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio y anular están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio y anular están en una posición lateral
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] < lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "Y" está formada
  } else {
    return false; // La letra "Y" no está formada
  }
}

// Función para detectar la forma de la letra "Z" (mayúscula)
function detectLetterZ(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Supongamos que el índice es el punto 8 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const indexTip = hand[8];

  // Supongamos que el medio es el punto 12 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const middleTip = hand[12];

  // Supongamos que el anular es el punto 16 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const ringTip = hand[16];

  // Supongamos que el meñique es el punto 20 en la lista de landmarks
  // y que queremos verificar si está en una posición lateral
  const pinkyTip = hand[20];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Define una posición umbral lateral para considerar que el índice, medio y anular están en una posición lateral
  const lateralThreshold = 50;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral y si el índice, medio y anular están en una posición lateral opuesta
  if (thumbTip[1] < heightThreshold &&
      indexTip[0] > lateralThreshold &&
      middleTip[0] < lateralThreshold &&
      ringTip[0] > lateralThreshold) {
    return true;  // Se considera que la letra "Z" está formada
  } else {
    return false; // La letra "Z" no está formada
  }
}




window.addEventListener("load", detectSignLanguage);