// [] -> arreglo

// const arr = new Array(10);
// console.log(arr); // 10 elemnentos y está vacío

// const arr2 = [];
// console.log(arr1);

let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videojuegos }); // { videojuegos: Array(3) }

console.log(videojuegos[0]);

let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

// console.log({ arregloCosas });

console.log(arregloCosas[2]); // 'Fernando'

// Ejercicio imprimir Dr. Light
console.log(arregloCosas[7][3]); // Dr. Light

console.log(arregloCosas[7][4][1]); // Woodman
