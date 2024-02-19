// -- Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// -- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
var lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// -- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push(['Java', 'Ruby', 'GoLang']);

// -- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.  
    for(var i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
    console.log('- - - - - - - - - -');

// -- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
    for(var i = lenguajesDeProgramacion.length-1; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
    console.log('- - - - - - - - - -');

// -- Crea una función que calcule el promedio de los elementos en una lista de números.
    let listaNumeros = [1, 2, 3, 4, 5];
    let cantidadNumeros = listaNumeros.length;
    let total = 0;
    let promedio = 0;
    for(let i = 0; i < listaNumeros.length; i++){         
        total += listaNumeros[i];
    }

    promedio = total/cantidadNumeros;

    console.log(`La suma es ~${total}~ y la cantidad de numeros es ~${cantidadNumeros}~`);
    console.log(`Por lo tanto, el promedio de la lista es: ${promedio}`);
    console.log('- - - - - - - - - -');

// -- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let listaNumeros2 = [1, 6, 3, 9, 2, 5];
let maximo = listaNumeros2[0]; //Variable que almacena el arreglo pero inicializado en 0
let minimo = listaNumeros2[0];

for (let i = 1; i < listaNumeros2.length; i++) { // Recorrer el arreglo
    if (listaNumeros2[i] > maximo) {
        maximo = listaNumeros2[i];
    }
    if (listaNumeros2[i] < minimo) {
        minimo = listaNumeros2[i];
    }
}
console.log("El valor máximo es: " + maximo);
console.log("El valor mínimo es: " + minimo);

// -- Crea una función que devuelva la suma de todos los elementos en una lista.
let listaNumeros3 = [1, 2, 3, 4, 5];
let total2 = 0; 
for(let i = 0; i < listaNumeros3.length; i++){         
    total += listaNumeros3[i]
}
console.log(`El total es: ${total}`);
console.log('- - - - - - - - - -');

// -- Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i; // Devuelve la posición si se encuentra el elemento
        }
    }
    return -1; // Devuelve -1 si el elemento no se encuentra en la lista
}
// Ejemplo de uso:
let listaNumeros4 = [1, 3, 5, 7, 9];
let elementoBuscado = 5;
let posicion = encontrarPosicion(listaNumeros4, elementoBuscado);
console.log("La posición de " + elementoBuscado + " en la lista es: " + posicion);

elementoBuscado = 8;
posicion = encontrarPosicion(listaNumeros4, elementoBuscado);
console.log("La posición de " + elementoBuscado + " en la lista es: " + posicion);

// -- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// -- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
