Guía de la Rama tailwind_css (Actualizada con @tailwindcss/vite)
En esta rama, integramos Tailwind CSS para el estilizado de la aplicación, utilizando el plugin oficial para Vite. A continuación se detallan los pasos que se siguieron, basados en la documentación oficial.

1. Instalación de Dependencias
Primero, instalamos las dependencias de desarrollo necesarias.
``` bash
npm install -D tailwindcss @tailwindcss/vite postcss autoprefixer
```

2. Modificamos el archivo vite config
``` ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //<-- insertamos esta linea
export default defineConfig({
  plugins: [
    //...
    tailwindcss(), // insertamos esta linea dentro de plugins
  ],
})
```

3. Creamos un archivo css en la raiz de nuestro proyecto e importamos tailwindcss
``` bash
touch main.css
```

Dentro del main.css que creamos insertamos la siguiente linea

``` css
@import "tailwindcss";
```

4. Importamos nuestro archivo main.css en el index.html raiz de nuestro proyecto

``` html
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <!-- insertamos aqui nuestra referencia a main.css -->
  <link rel="stylesheet" href="main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite App</title>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>
```

5. Probamos si las clases de tailwind estan funcionando modificando alguno de nuestros componentes

``` html
<!-- /scr/App.vue -->
<script setup lang="ts"></script>

<template>
    <!-- insertamos clases tailwind para ver si funciona -->
    <h1 class="text-2xl text-emerald-950">Tailwind</h1>
    <p class="text-emerald-500">
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
    </p>
</template>

<style scoped></style>
```

Esta aplicacion de vue esta donde la dejamos, es decir ya tenemos la estructura HTML pero sin funcionalidad. Ya copie los modelos de nuestro proyecto de react, ahora voy a crear el archivo types.ts dentro de la carpeta models para que luego los podamos usar a traves de nuestra aplicacion.

Listo creamos los modelos! Ahora solo tenemos que empezar con nuestra logica, como vue al igual que react es compatible con typescript, solo tenemos que copiar nuestro archivo de calculos de react. Primero creo un archivo calculation.ts dentro de la carpeta utils.

Vue a diferencia de react que usa Hooks, usa algo llamado composables, que en escencia son lo mismo. Vamos a crear uno para poder usar nuestra logica ordenadamente.

Primero vamos a crear una carpeta para nuestros composables dentro de src. y dentro un archivo "useCalculations.ts". Creado nuestro composable esta listo para funcionar!

Empecemos con la logica propia del componente app.ts, peroo primerooo me olvide de subir la rama de funcionalidad, vamos a hacerlo ahora!

