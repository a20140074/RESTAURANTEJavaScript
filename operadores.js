alert("Bienvenido al restaurante TODO RICO SIN CUENTAS. Esta es su cuenta.");

//ingresar datos
var num1 = parseInt(prompt("Costa de Entrada"));
var num2 = parseInt(prompt("Costo del Plato Principal"));
var num3 = parseInt(prompt("Costa del Postre"));

alert("Revise los resultados en la consola presionando F12.");

//Procesar Datos
var suma = num1 + num2 + num3;
var igv = (suma*0.18) +suma;

//Mostrar Datos
console.log("El costo de la entrada es: " + num1)
console.log("Costo del Plato Principal es: " + num2)
console.log("Costa del Postre es : " + num3)
console.log("El cosot total es: " + suma)
console.log("El costo total con IGV es: " + igv)