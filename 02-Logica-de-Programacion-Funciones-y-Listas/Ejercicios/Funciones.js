//Calculadora IMC
function calcularIMC(peso, estatura){
    let imc = peso * (estatura*estatura);
    return imc;
}

//Factorial de un numero
function factorial(num) {
    // Si el numero es 0 o 1 el factorial de esos números es 1
    if (num === 0 || num === 1)
      return 1;

    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  factorial(5);

//Funcion que convierta un valor a dolares
function toPesos(dolar){
    let peso = 17;
    let aPesos = dolar*peso;
    return aPesos;
}

//Funcion que muestra el área y perímetro de una sala rect.
function areayPerimetro(altura, anchura){
    let area = altura * anchura;
    let perimetro = (2*altura) + (2*anchura);    
    return{
      area,
      perimetro
    };
}

