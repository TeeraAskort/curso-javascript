const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

console.warn("While");

// while (i < carros.length) {
//   console.log(carros[i]);
//   i++;
// }

// Condiciones falsas
// undefined
// null
// false

while (carros[i]) {
  // Lo mismo que i < carros.length
  if (i === 1) {
    // break;
    i++;
    continue;
  }
  console.log(carros[i]);
  i++;
}

console.warn("Do while");

let j = 0;

do {
  console.log(carros[j]);
  j++;
} while (carros[i]);
