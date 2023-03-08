'use strict';
let number1 = 10;
let number2 = 5;

//suma+
let result = number1 + number2;
//console.error(result);
//resta -
result = number1 - number2;
//console.error(result);
//multiplicacion *
result = number1 * number2;
//console.error(result);
//division /
result = number1 / number2;
//console.error(result);
//modulo o mod % //residuo de la division
result = number1 % number2;
//console.error(result);
//potenciacion
/*result = number1 % number2;
console.error(result);*/
//Operadores Lógicos

/**
 * Mayor > mayor igual >=
 * Menor < mejor igual <=
 * Asignación =
 * Comparación ==(No estricto compara valor) y ===(estricto compara tanto tipo de dato como valor)
 * Negación != y !==
 * Y and &&(estricto) , o or ||(no estricto)
 */

let number3="10";

if(number1 === number3){
    //console.log("numero 1 es menor o igual a number 3");

}else{
   //console.log("no son iguales");
}

let condicion1 = (number1<0);
let condicion2 = (number2 % 2 !== 0);
console.log(condicion1, condicion2);

if(condicion1 && condicion2){
    console.log("Una de las condiciones es verdadera");
}else{
    console.log("las 2 condiciones son falsas");
}
/*

if(){
    if(){

    }else{

    }
}else{
    if(){
        if(){

        }
    }
}
*/