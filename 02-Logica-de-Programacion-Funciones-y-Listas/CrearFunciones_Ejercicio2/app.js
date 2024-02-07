function holaMundo(){
    console.log('Hola Mundo!');
}

function holaMundoPlus(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

function dobleNumero(numero){
    let numDob = numero * 2;
    return numDob;
}

function tresNumeros(num1, num2, num3){
    let promedio = (num1 + num2 + num3)/3;
    return promedio;
}

function numeroMayor(num1, num2){
    if(num1 < num2){
        return num1;
    } else {
        return num2;
    }
}

function numeroMulti(num1){
    let multi = num1*num1;
    return multi;
}