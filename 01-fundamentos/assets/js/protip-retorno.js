// Si el nombre de la propiedad y de la variable son el mismo puedes omitir el nombre de la propiedad

function crearPersona(nombre, apellido) {
  return {
    nombre,
    apellido,
  };
}

// Para retornar un objeto sin poner corchetes, poner el objeto entre parentesis
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Andreu", "Furió");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

// Coger todos los argumentos sin especificar argumentos uno por uno
// No puede haber nada después de "...args"
// Puedes poner argumentos antes de "...args" y tendrás su propio valor
const imprimeArgumentos2 = (edad, ...args) => {
  console.log({ edad, args });
  return args;
};

imprimeArgumentos(10, true, false, "Fernando", "Hola");
const argumentos = imprimeArgumentos2(10, true, false, "Fernando", "Hola");
console.log({ argumentos });

// Para crear una variable con cada cosa retornada del array
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Fernando",
  "Hola"
);

console.log({ casado, vivo, nombre, saludo });

// Coger solo los atributos de un objeto que quieras
const { apellido } = crearPersona("Fernando", "Herrera");

console.log({ apellido });
