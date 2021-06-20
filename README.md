## Airflight Realtime Chipiona

Radar para monitorizar vuelos en tiempo real desde Chipiona (Cádiz, España)

Esta aplicación muestra un mapa con los aviones y su recorrido en tiempo real
sobre la zona de Chipiona que realmente abarca una extensión (con menor precisión
debido a que baja la señal o se pierde por elementos naturales como montañas,
vegetación, reflexión... según la altura/distancia de los aviones) prácticamente
toda la provincia de Cadiz una pequeña perte en algunos casos de las zonas:
Málaga, Huelva, Sevilla, Tanger, Ceuta y el Golfo de Cádiz.

## Advertencias

Los datos tomados para este proyecto son recopilados por mi utilizando
dispositivos propios y modificando su funcionamiento por lo que puede haber
en algunos casos retardos entre la detección y que sea mostrado (uso servidores
propios con un coste asequible para este proyecto que no busca obtener beneficios
a través de el mismo).

Para tomar los datos utilizo una tarjeta sintonizadora de televisión digital
(TDT) con algunas modificaciones para capturar las emisiones de los aviones en
las bandas 1090MHZ y 970MHZ.

Los datos son recopilados por una Raspberry PI 4 de 2GB de ram y subidos a mi
propia API en https://api.fryntiz.dev dónde los proceso, valido, agrupo y
preparo para ser consumido mediante esta aplicación y la interfaz web.

## Sobre el código de este proyecto

Este proyecto no tiene un código óptimo en la versión app siendo un pequeño
hack/apaño lo que he realizado sobre el framework ionic.

No utilizo componentes porque eso requería reescribir prácticamente en su
totalidad una cantidad importante de código para adaptarlo a la filosofía que
este framework tiene (y me sabe bastante mal que haya quedado así de chapuza).

Estimaba más de una semana para portar cada elemento/script a componentes de
vue.js y no le he visto rentabilidad a realizarlo. No dispongo de demasiado
tiempo libre y la causa no es tan importante como para dedicárselo teniendo
otras cosas más importante (para mi) pendientes de realizar con prioridad.

Aún así, la aplicación desde los dispositivos testeados parece que cumple con
el objetivo esperado funcionando igual que su versión web con apenas unos
cambios en los estilos CSS

## Posibles Planes de Futuro

- Selector de tiempo de vuelo para mostrar vuelos en rangos de 10 minutos pudiendo
  mostrar vuelos anteriores hasta un máximo de una hora.
- Adaptación del proyecto a componentes Vue.js
- Mejoras en diseño, creación de menú y listado de vuelos en menú lateral deslizante.

## Preparar proyecto

Regenerar assets con capacitor

```bash
capacitor-resources -p android
```

Regenerar assets con cordova (instalado como global)

```bash
cordova-res android --skip-config --copy
```

```bash
ionic build android
```

Preparar proyecto para producción y abrir **Android Studio**

```bash
ionic capacitor build --prod android
```
