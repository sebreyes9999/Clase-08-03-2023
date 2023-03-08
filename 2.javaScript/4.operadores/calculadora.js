'use strict';
let numer1;
let numer2;
let result;
let opcion = parseInt(prompt("Ingrese la operación a realizar: \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.División"));

numer1 = parseFloat(prompt("Ingrese el numero 1"));
numer2 = parseFloat(prompt("Ingrese el numero 2"));

let suma = (numer1 + numer2);
let resta = (numer1 - numer2);
let multi = (numer1 * numer2);
let divi = (numer1 / numer2);


if(opcion === 1){

    alert("la suma es: "+ suma);
 
}else if(opcion === 2){

    alert("la resta es: "+ resta);

}else if(opcion === 3){

    alert("la multiplicación es: "+ multi);

}else if(opcion === 4){

    if(numer2 === 0){

        alert("El numero no es valido");
        
    } 

}else{

    alert("la división es: "+ divi);
 
}
