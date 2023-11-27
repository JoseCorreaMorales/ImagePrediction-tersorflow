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
  
      if (detectLetterA(hand)) {
        console.log("Letra A detectada");
      }
  

  
      
    }
  
    // Repetir el proceso para el siguiente fotograma
    requestAnimationFrame(() => detectHandpose(model, video, ctx));
  }


  // Función para detectar la forma de la letra "A"
function detectLetterA(hand) {
  // Supongamos que el pulgar es el punto 4 en la lista de landmarks
  // y que queremos verificar si está en una posición elevada
  const thumbTip = hand[4];

  // Define una altura umbral para considerar que el pulgar está elevado
  const heightThreshold = 100;  // Puedes ajustar este valor según tus necesidades

  // Verifica si la altura del pulgar supera el umbral
  if (thumbTip[1] < heightThreshold) {
    return true;  // Se considera que la letra "A" está formada
  } else {
    return false; // La letra "A" no está formada
  }
}
    
 /*  async function startDetection() {
    await detectSignLanguage();
  } */
  
  // Iniciar la detección de lenguaje de señas cuando la página se carga
  //window.onload = detectSignLanguage;

  window.addEventListener("load", detectSignLanguage);