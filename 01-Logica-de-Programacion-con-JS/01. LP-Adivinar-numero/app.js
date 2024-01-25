//Desafío final
//  ToDo:
//  ¿Qué cambios serían necesarios para que no sea entre 1 y 10? Imaginen que quieran jugar entre 1 y 100, o que el usuario quiera jugar entre 1 y 1000.
//  ¿Qué cambios serían necesarios para que esta funcionalidad pueda ser implementada, pueda ser aplicada?

//Variables
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;

// Validamos que el numero del usuario sea > a 1 y si no ingresa un numero válido, entramos en un bucle hasta que elija otro numero
let numeroMaximoPosible = parseInt(prompt('Indica el número máximo de números en los que te gustaría jugar'));
while (numeroMaximoPosible <= 1) {
    numeroMaximoPosible = prompt('Ingresa un valor adecuado para jugar (mayor a 1)')
}

//Continua el flujo, solicitamos que el usuario ingrese un numero dentro de 1 hasta el rango que el eligió
numeroUsuario = parseInt(prompt(`Juego iniciado, indica un número entre 1 y tu numero que fue ->${numeroMaximoPosible}<- por favor:`));
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;

while (numeroUsuario != numeroSecreto) {    

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //No acertamos y le pedimos al usuario que
        if (numeroUsuario > numeroSecreto) {
            alert(`El número secreto es menor a ${numeroUsuario}`);
            numeroUsuario = parseInt(prompt(`Indica un número entre 1 y tu numero que fue ->${numeroMaximoPosible}<- por favor:`)); //Reasignamos variable
        } else {
            alert(`El número secreto es mayor a ${numeroUsuario}`);
            numeroUsuario = parseInt(prompt(`Indica un número entre 1 y tu numero que fue ->${numeroMaximoPosible}<- por favor:`)); //Reasignamos variable
        }       
        intentos++;     
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            alert(`El número secreto era: ${numeroSecreto}`);
            break;
        }
    }
}














