//Ejercicio 1. Contador
let contador = 0;

while(contador < 10){
    contador+=1;
    alert(contador);
}

//Ejercicio 2. Contador invertido
let contador1 = 10;

while(0 < contador1){
    contador1 -= 1;
    alert(contador1+1);
}

//Ejercicio 3. Contador progresivo
let contador2 = 0;
let numeroUsuario = prompt("Ingresa el numero para contar: ");

console.log(`Se contara hasta: ${numeroUsuario}`);
while(contador2 < numeroUsuario){
    contador2 += 1;
    console.log(contador2);
}