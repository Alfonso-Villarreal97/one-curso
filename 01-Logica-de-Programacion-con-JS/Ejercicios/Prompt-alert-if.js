//1. Ejercicio Integrador - Dia de la semana

let resp = prompt("Que dia de la semana es?");

if (resp == "Sabado" || resp == "Domingo") {
    alert('Buen fin de semana')
} else {
    if (resp == "Lunes" || resp == "Martes" || resp == "Miercoles" || resp == "Jueves" || resp == "Viernes")
    {
        alert('Buena semana!')
    } 
    else
    {
        alert('No ingresaste un día valido')
    }
}

//2. Ejercicio Integrador - Numero Positivo o negativo
let resp1 = prompt("Ingresa un numero: ");

if(resp1 > 0){
    alert('El numero ingresado es positivo')
} else {
    alert('El numero ingresado es negativo')
}

//3. Ejercicio Integrador - Puntuación
let puntaje = 100;

if(puntaje >= 100){
    alert('Felicidades, has ganado');
} else {
    alert('Intenta nuevamente')
}

// 4. Ejercicio Integrador - Saldo
let saldo = 100;

alert(`Tu saldo actual es de: ${saldo}`)

//5. Ejercicio Integrador - Alerta de Bienvenida
let nombreUsuario = prompt("Ingresa tu nombre");

alert(`Bienvenido al sitio: ${nombreUsuario}`)