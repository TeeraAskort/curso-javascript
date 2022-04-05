const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 15,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
  },
};

const melissa = {
  nombre: "Melissa",
  edad: 35,
  imprimir() {
    console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
  },
};

// function Persona(nombre, edad) {
//   console.log("Se ejecutó esta linea");

//   this.nombre = nombre;
//   this.edad = edad;

//   this.imprimir = function () {
//     console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
//   };
// }

const maria = new Persona("Maria", 18);
