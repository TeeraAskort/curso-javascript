function saludar() {
  console.log("Hola Mundo");
}

// Funciones anónimas
const saludar2 = function () {
  console.log("Hola Mundo");
};

function saludar3(nombre) {
  console.log("Hola " + nombre);
}

const saludar4 = function (nombre) {
  console.log("Hola " + nombre);
};

function saludar5() {
  console.log(arguments);
  console.log("Hola Mundo");
  return 10;

  //   Esto no se va a ejecutar nunca
  console.log("Código después del return");
}

function saludar6() {
  // Para retornar varios elementos
  return [1, 2];
}

const saludarFlecha = () => {
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

saludar();
saludar2();
saludar3("Pepe");
saludar4("Pepe");
let retornoSaludar5 = saludar5("Fernando", 40, true, "Costa Rica"); // 1
console.log({ retornoSaludar5 });
saludarFlecha();
saludarFlecha2("Pepe");

let retornoSaludar6 = saludar6();
console.log(retornoSaludar6[0], retornoSaludar6[1]);

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  return a + b;
};

const sumar3 = (a, b) => a + b;

console.log(sumar(1, 2));
console.log(sumar2(1, 2));
console.log(sumar3(1, 2));

function getAleatorio() {
  return Math.random() * 100;
}

console.log(getAleatorio());

// Ejercicio getAleatorio2 con función flecha sin corchetes
const getAleatorio2 = () => Math.random() * 100;

console.log(getAleatorio2());
