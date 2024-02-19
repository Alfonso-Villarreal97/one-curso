/*
ToDo:
- Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
- Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
- Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil...
...Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
- Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
- Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/
let contenido = document.querySelector('h1');
contenido.innerHTML = 'Hora del Desafío';

function mensajeConsola(){
    console.log("El botón fue clicado");
}

function mensajePrompt(){
    let ciudad = prompt('Indica el nombre de una ciudad de México');
    console.log(`Estuve en ${ciudad} y me acordé de ti`);
}

function mensajeAlerta(){
    alert('Yo amo JS (+/-)');
}

function suma(){
    let numero1 = parseInt(prompt('Ingresa el primer número'));
    let numero2 = parseInt(prompt('Ingresa el segundo número'));
    let suma = numero1 + numero2;
    alert(`La suma de los números ingresados es: ${suma}`);
}
