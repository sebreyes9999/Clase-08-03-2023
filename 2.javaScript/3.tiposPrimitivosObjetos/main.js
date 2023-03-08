'use strict';
/**Tipos de datos primitivos y objetos */

let var1 = 19;
let var2 = var1;

var1 = 29;

console.log(var1,var2);

/**
 * Objetos
 */

//un objeto busca simular la vida real que esta definido por propiedades, caracteristicas, atributos, un objeto es la isntanciación de una clase
//La clase es la plantilla del objeto(propiedades, caracteristicas, atributos)
//let nombre; let apellido; let edad;

//metodos
//caminar(); correr(); respirar();

//Persona erick = new Person();
                //(creando objeto)= Instancia Objeto
//erick.nombre = "Erick";
//erick.apellido = "Parado";
//erick.edad = ""23;
//erick.caminar();
let mascota = {
    name: 'FIFI',
    type: 'dog',
    age: 2,
    vacunas: ['rabia','2','3']
}

let miMascota = mascota;
mascota.name ="Rocco";//si se cambia el valor del objeto en lo ultimo cambiara el valor por ese ultimo
miMascota.age=5;
console.info(miMascota);
//si queremos que un objeto tenga varios valores no se iguala sino se clona