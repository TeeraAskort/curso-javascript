const regresaTrue = () => {
  console.log("Retorna true");
  return true;
};

const regresaFalse = () => {
  console.log("Retorna false");
  return false;
};

console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse());
console.log(!regresaTrue());

console.warn("And"); // Solo true si todo es true

console.log(true && true); // true
console.log(true && !false); // true

console.log("========");

// And no ejecuta el resto de condiciones si una ya es falsa
console.log(regresaFalse() && regresaTrue()); // Ejecuta solo el false
console.log(regresaTrue() && regresaFalse()); // Ejecuta ambos

console.log("========");
regresaFalse() && regresaTrue();

console.log("Cuatro condiciones", true && true && true && false); // false

console.warn("OR"); // Retorna true si una condicion es true

console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); // Solo ejecuta el primero porque ya da verdadero

console.log("Cuatro condiciones", true || true || true || false); // true

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150;
const a2 = false && "Hola Mundo" && 150;
const a3 = "Hola" && "Mundo" && soyFalso && true;
const a4 = soyFalso || "Ya no soy falso";
const a5 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true;
const a6 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true;

console.log({ a1, a2, a3, a4, a5, a6 }); // 150, false, false, Ya no soy falso, Ya no soy falso de nuevo, true

if (true || true || true || false) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}
