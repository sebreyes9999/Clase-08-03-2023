'use strict';
/**
 * Contadores y Acumuladores
 */

let contador = 3;
let acumulador = 0;//a no ser que sea una muktiplicación u otra operación de acumulación siempre sera 
let promedio = 0;

/**
 * Casteo o parseo
 * parseInt paseFloat
 */

for(let i=0; i<contador;i++){
    acumulador = acumulador + parseFloat(prompt("Introduce la nota"));
    //Si voy a captuar datos numericos utilizamos parseFloat
}


promedio = acumulador/contador;

alert("El promedio es:"+promedio);
//Todos los datos llegan como un string
