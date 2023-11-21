# ImagePrediction-tersorflow

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

 
