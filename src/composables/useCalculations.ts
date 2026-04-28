import { computed, type Ref } from 'vue'; // computed es una funcion nativa de vue
import type { Trip } from '../models/types'; // importamos nuestro modelo trip
import { calculateStatics } from '../utils/calculations'; // y nuestra funcion de calculo

export function useCalculos(trip: Ref<Trip>) { // nuestra funcion recibe como argumento un tipo Trip, pero reactivo, es decir una variable reactiva ref<Trip>()

    // La lógica reactiva vive aquí, pero está aislada del componente visual
    const resultados = computed(() => calculateStatics(trip.value));

    // Podemos agregar más lógica, como el formato de los datos
    const tieneDatos = computed(() => trip.value.loads.length > 0);

    return {
        resultados,
        tieneDatos
    };
}