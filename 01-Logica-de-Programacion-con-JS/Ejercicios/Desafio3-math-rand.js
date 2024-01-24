//1. Mensaje de bienvenida
console.log("Hola, bienvenido");

//2. Mensaje de bienvenida con nombre
let nombre = "Diego Alfonso";
console.log(`Hola, ${nombre} bienvenido`);

//3. Mostrar bienvenida en alert
alert(`¡Hola, ${nombre}!`);

//4. Un prompt
let resp = prompt("¿Cual es el lenguaje de programacion que más te gusta?");
console.log(resp);

//5. Suma de numeros
let val1 = 50;
let val2 = 10;
let resultadoSum = val1 + val2;
console.log(`La suma de ${val1} y ${val2} es igual a ${resultadoSum}`);

//6. Resta de numeros
let resultadoRes = val1 - val2;
console.log(`La resta de ${val1} y ${val2} es igual a ${resultadoRes}`);

//7. Edad mayor o menor
let edadUsuario = prompt("Ingresa tu edad:");
let edadMayor = 18;
if(edadUsuario >= edadMayor){
    alert('Ya puedes hacer cosas de grandes (buscar chamba)');
} else {
    alert('Estás chiquito, pongase a estudiar');
}

//8. Numero positivo o negativo
let numero = prompt("Ingresa un numero: ");
if(numero == 0){
    alert('El numero ingresado es cero');
} else {
    if(numero > 0){
        alert('El numero ingresado es positivo');
    } else {
        alert('El numero ingresado es negativo');
    }
}

//9. Mostrar numeros en consola
let contador = 0;
while(contador < 10){
    contador += 1;
    console.log(`Y dice ${contador}`);
}

//10. Calificaciones
let nota = 8;
if(nota >= 7){
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

//11. Numero aleatorio en consola
let numeroRand1 = Math.random();
console.log(`El numero generado es: ${numeroRand1}`);

//12. Numero aleatorio en consola 2
let numeroRand2 = Math.floor(Math.random()*10)+1;
console.log(`El numero generado es: ${numeroRand2}`);

//13. Numero aleatorio en consola 3
let numeroRand3 = Math.floor(Math.random()*1000)+1;
console.log(`El numero generado es: ${numeroRand3}`);