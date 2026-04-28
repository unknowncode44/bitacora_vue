<script setup lang="ts">
// importaciones siempre arriba
import { ref, watch } from 'vue';
import { useCalculos } from './composables/useCalculations'; // [!code ++]
import type { Trip } from './models/types';


// primero creamos nuestras variables de estado, en vue se llaman variables reactivas.

// variable de estado 1: el viaje
// como ya teniamos informacion guardada en en el localstorage, no las trajo por ello las vemos.
const trip = ref<Trip>(JSON.parse(localStorage.getItem('bitacora_viaje') || '{"kmInicial": 0, "cargas": []}'));

// Inyectamos la lógica del composable pasándole nuestro estado
// usamos desestructuracion del objeto para traer los resultados que calcula nuestro composable (recordar pasarle trip como argumento)
const { resultados, tieneDatos } = useCalculos(trip);

// Variables reactivas para el formulario
const initKmInput = ref(0); // para nuestros km iniciales, nuestro estado inicial es 0
const kmCargaInput = ref(''); // para los km durante la carga, estado inicial string vacio
const litrosInput = ref(''); // para los litros durante cada carga, estado inicial string vacio


// esta funcion solo cumple con obtener los datos de los inputs y actualizar nuestras variables reactivas
const addLoad = () => {
  // cada vez que ejecutamos la funcion se agregan nuevas cargas
  // dentro de la lista de carga de nuestra variable trip
  trip.value.loads.push({
    km: Number(kmCargaInput.value),
    liters: Number(litrosInput.value)
  });

  // tambien vamos a definir la variable de km iniciales
  trip.value.initKm = initKmInput.value

  console.info(trip.value)

  // luego "reseteamos los valores"
  kmCargaInput.value = '';
  litrosInput.value = '';


};

</script>

<template>
  <div className='bg-gray-200 min-h-screen flex items-center justify-center p-6 font-sans'>
    <div className="w-full max-w-6xl flex gap-6">
      <div className="w-1/2 bg-white p-6 rounded-2xl shadow">

        <h1 className="text-2xl font-bold text-gray-700 mb-6">
          Registro de Carga
        </h1>

        <form @submit.prevent="addLoad" id="calc-form" className="flex flex-col gap-4">

          <div>
            <label className="text-sm text-gray-600">Kilometraje inicial</label>
            <input v-model="initKmInput" id="km-inicio" type="number" min="0"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Kilometraje actual</label>
            <input v-model="kmCargaInput" id="km-actual" type="number" min="0"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Litros cargados</label>
            <input v-model="litrosInput" id="litros" type="number" step="0.01" min="0.01"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <button type="submit" className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Agregar Carga
          </button>
        </form>
        <div id="resultado" className="mt-8 text-center min-h-12.5 transition-all duration-500">
        </div>
      </div>

      <div className="w-1/2 bg-white p-6 rounded-2xl shadow flex flex-col">

        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Historial de Cargas
        </h2>
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-2">KM</th>
                <th className="p-2">Litros</th>
              </tr>
            </thead>
            <tbody id="tabla-historial">
              <!-- por cada iteracion tenemos crear una fila de tabla <tr> -->
              <!-- cuando usamos v-for podemos pasar dos argumentos, uno representa cada item de la lista, e index el indice de cada objeto -->
              <tr v-for="(load, index) in trip.loads" :key="index" class="border-b">
                <!-- la sintaxis se traduce algo como: por cada carga dentro de trip.loads genera un td con los km de la carga y los litros cargados -->
                <td class="p-3">{{ load.km }} km</td>
                <!-- para acceder a los datos debemos usar doble llaves {{ y la variable dentro de las mismas }} -->
                <td class="p-3 font-medium">{{ load.liters }} L</td>
              </tr>

              <!-- aca usamos v-if que es otra directiva que nos sirve para crear condiciones, en este caso si trips.loads esta vacio deberia mostrar ese texto "no hay registros" vamos a probar: 1ro borre todo lo del localstorage, al actualizar no habria cargas y por tanto deberia salir ese mensaje -->
              <tr v-if="trip.loads.length === 0">
                <td colspan="2" class="p-6 text-center text-gray-400 italic">No hay registros</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-2">
          <button id="btn-calcular" type="button"
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Calcular Viaje
          </button>
          <button id="btn-reset" type="button"
            className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
