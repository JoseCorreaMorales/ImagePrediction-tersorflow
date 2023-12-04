# ImagePrediction-tersorflow

## Acerca del proyecto 📋
Uso de TensorFlow.js para llevar a cabo la predicción de imágenes mediante el uso del modelo MobileNet y la clasificación usando el algoritmo K-Nearest Neighbor y 🖐️PoseDetection. Permite la identificación de objetos en imágenes de fuentes como Picsum, e integra la habilidad de cambiar de manera dinámica streams en tiempo real desde la webcam

## Objetivo 🚀
El objetivo principal de esta aplicación es proporcionar una herramienta que no solo sea eficiente en la identificación precisa de objetos en imágenes, sino que también permita una experiencia interactiva al incorporar la detección de **lenguaje de señas** mediante la utilización de los modelos de MobileNet, KNN y  Hand Pose Detection. Este componente adicional amplía significativamente la utilidad de la aplicación, ofreciendo una interfaz inclusiva y accesible para personas con discapacidades.

La implementación del modelo MobileNet, que es una red neuronal convolucional (CNN) preentrenada, garantiza una alta precisión en la predicción de imágenes al aprovechar sus capacidades de reconocimiento de patrones. El uso simultáneo del clasificador KNN complementa esta funcionalidad, permitiendo la clasificación en tiempo real de objetos detectados mediante la cámara web.

La detección de lenguaje de señas mediante Hand Pose Detection añade una capa adicional de interactividad a la aplicación. Este componente se basa en una red neuronal convolucional y proporciona la capacidad de reconocer gestos de las manos y traducirlos en un alfabeto manual, proporcionando así una herramienta valiosa para la comunicación inclusiva.


## Construido con 🛠️
<p align="center">
  <img src="https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Icon" />
  <img src="https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Icon" />
  <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Icon" />
  <img src="https://img.shields.io/badge/-Toastr-0078D4?style=for-the-badge" alt="Toastr Icon" />
  <img src="https://img.shields.io/badge/-TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow Icon" />
  <img src="https://img.shields.io/badge/-MobileNet-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="MobileNet Icon" />
  <img src="https://img.shields.io/badge/-KNN-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="KNN Icon" />
  <img src="https://img.shields.io/badge/-Hand%20Pose%20Detection-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="Hand Pose Detection Icon" />
</p>


## Estado del clasificador KNN

datos específicos de cada clase y sus activaciones asociadas del modelo MobileNet. Estos datos se utilizan para realizar predicciones basadas en las activaciones del modelo durante la ejecución


```json
    "exampleClass": {
      "kept": true,
      "isDisposedInternal": false,
      "shape": [
        1,
        1024
      ],
      "dtype": "float32",
      "size": 1024,
      "strides": [
        1024
      ],
      "dataId": {
        "id": 326
      },
      "id": 195,
      "rankType": "2",
      "scopeId": 272
    },
```

**kept**: Indica si la clase se mantiene en el clasificador.

**isDisposedInternal**: Indica si se ha liberado internamente (eliminado).

**shape**: La forma de la matriz de datos.

**dtype**: El tipo de datos de la matriz.

**size**: El tamaño total de la matriz.

**strides**: La información de desplazamiento para acceder a elementos en la matriz.

**dataId**: Información sobre la identificación de los datos.

**id**: Identificador único de la clase.

**rankType**: Tipo de rango de la matriz.

**scopeId**: Identificador de ámbito asociado con la clase.


## Hand pose detection🖐️

<p align="center">
  <img src="./assets/handlandmarks.png" alt="Hand Pose Detection" />
  </p>


* ***Model Type***: Red neuronal convolucional.

* ***Input***: Un stream de video o una imagen de tamaño arbitrario.
  * ***Orden de canales***: RGB con valores en [0.0, 1.0].

* ***Output(s)***: ULista de manos detectadas, cada una de las cuales contiene.
  * 21 puntos de referencia en pantalla tridimensionales.

  * Un número flotante que representa la probabilidad de lateralidad de la mano predicha.

  * 21 puntos de referencia tridimensionales a escala métrica mundial. Las predicciones se basan en el modelo de mano GHUM

### heightThreshold:

* **Uso**: Este umbral se utiliza para evaluar la altura de un landmark en el eje vertical (Y).
  * **Cómo funciona**: Si la coordenada Y de un landmark (por ejemplo, el extremo del pulgar) es menor que el valor de heightThreshold, se considera que la altura es suficientemente baja.

### lateralThreshold:

* **Uso**: Este umbral se utiliza para evaluar la posición lateral de un landmark en el eje horizontal (X).
  * **Cómo funciona**: Si la coordenada X de un landmark (por ejemplo, la punta del índice) es mayor que el valor de lateralThreshold, se considera que está en una posición lateral.


###### Ver más
* [Documentación PDF](https://drive.google.com/file/d/1-rmIgTfuCbBPW_IFHkh3f0-U_lnGrWpg/view)
* [Documentación GitHub](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection)

## Roadmap 📋

- [x] Reconocer dinámicamente imágenes de [Picsum Photos](https://picsum.photos)
    - [ ]  Reconocer dinámicamente imágenes de [Place Kitten](https://placekitten.com/)
- [x] Reconocer dinámicamente imágenes desde la cámara web
- [x] Agregar notificaciones toastr
- [x]  Agregar MobileNet
- [ ]  Agregar KNN
- [ ]  Guardar clases con JSON-Server
- [ ] Agregar Hand Pose Detection
    - [ ] Agregar detección de lenguaje de señas con hand pose detection (alfabeto manual americano (AML))


## Diseño de la interfaz de usuario 🎨
<p align="center">
  <img  src="./assets/knn-section-design.png" width="80%" />
  <img  src="./assets/handpose-section-design.jpg" width="80%" />
</p>

## Acknowledgments  🎁

* [TensorFlow.js](https://www.tensorflow.org/js)
* [TensorFlow Models](https://www.tensorflow.org/js/models?hl=es-419)
* [TensorFlow Models - Github](https://github.com/tensorflow/tfjs-models)
* [Toastr](https://codeseven.github.io/toastr/)
* [Picsum Photos](https://picsum.photos)
* [Place Kitten](https://placekitten.com/)
* [JSON-Server](https://github.com/typicode/json-server)
 
