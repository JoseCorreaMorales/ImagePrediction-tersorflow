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
  
      if (configureLetterB(hand)) {
        console.log("Letra B detectada");
      }
  
      
    }
  
    // Repetir el proceso para el siguiente fotograma
    requestAnimationFrame(() => detectHandpose(model, video, ctx));
  }
    
 /*  async function startDetection() {
    await detectSignLanguage();
  } */
  
  // Iniciar la detección de lenguaje de señas cuando la página se carga
  //window.onload = detectSignLanguage;

  window.addEventListener("load", detectSignLanguage);