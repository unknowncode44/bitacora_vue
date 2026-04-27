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
5. Probamos si las clases de tailwind estan funcionando modificando alguno de nuestros componentes
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
