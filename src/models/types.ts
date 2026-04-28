// este modelo representa cada una de las cargas que hace el vehiculo:
export interface Load {
    km: number; // cuantos km tiene durante la carga
    liters: number; // cuantos litros cargo
}

// este modelo representa un ciclo completo es decir, cuantos km tenia en el principio y cuantas veces cargo.
export interface Trip {
    initKm: number; // para evitar problemas decimos que solo recibira numeros
    loads: Load[]; // aca almacenaremos las cargas, por eso es un array [] de cargas, "Load"
}

// este modelo representara los resultados de nuestros calculos
export interface CalcResult {
    totalDistance: number;
    totalLiters: number;
    averageConsumption: number;
}