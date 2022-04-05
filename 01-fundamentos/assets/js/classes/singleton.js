class Singleton {
  static instance;
  nombre = "";

  constructor(nombre = "") {
    if (!!Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = this;
      this.nombre = nombre;
      return this;
    }
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia3.nombre}`);
