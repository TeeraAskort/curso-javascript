let a = 15;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor de 10");
}

// console.log("Fin de programa");

const hoy = new Date(); // {}
let dia = hoy.getDay();
console.log({ dia });
// console.log(hoy);

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 1) {
  console.log("Martes");
} else {
  console.log("No es lunes ni martes ni domingo");
}
//   if (dia === 1) {
//     console.log("Lunes");
//   } else {
//     console.log("No es Lunes ni Domingo");
//   }

// Ejercicio sin usar if, else o switch, únicamente objetos
// dia = 3;

// dia de la semana

const dias = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

const dias2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

console.log(dias[dia] || "Dia no definido");
console.log(dias2[dia]);
