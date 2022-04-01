let a = 10;
let b = a;
a = 30;

console.log({ a, b }); // a: 30, b: 10

let juan = {
  nombre: "Juan",
};
let ana = { ...juan }; // Para copiar el objeto y no pasarlo por referencia
ana.nombre = "Ana";

console.log({ juan, ana });

// Usamos el spread "..." para pasar por valor en vez de referencia
const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

// Arrays

const frutas = ["Manzana", "Pera", "Piña"];

const otrasFrutas = [...frutas]; // Pasar por valor y no por referencia

console.time("slice");
const otrasFrutas2 = frutas.slice(); // Para pasar por valor y no por referencia
console.timeEnd("slice");

console.time("spread");
const otrasFrutas3 = [...frutas]; // Para pasar por valor y no por referencia
console.timeEnd("spread");

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
