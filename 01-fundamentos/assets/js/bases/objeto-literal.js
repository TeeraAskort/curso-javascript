const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima pelicula": "Infinity War",
};

console.log(personaje);
// Lo mismo
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad", personaje.edad);

console.log("Coords", personaje.coords);
console.log("Lat", personaje.coords.lat);

// Ejercicio numero trajes
console.log("No. Trajes", personaje.trajes.length);
console.log("Ultimo traje", personaje.trajes[personaje.trajes.length - 1]);

// Usar variables para acceder a objetos
const x = "vivo";
console.log("Vivo", personaje[x]);

// Acceder a objetos con nombre string
console.log("Última pelicula", personaje["ultima pelicula"]);

// Más detalles

// Borrar propiedades
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// Obtener pares de valores
const entriesPAres = Object.entries(personaje);
console.log(entriesPAres);

// personaje = true;
console.log(personaje);

// Bloquear modificaciones
Object.freeze(personaje);

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica"; // Modifica el objeto dentro del otro
console.log(personaje);

// Obtener el nombre de las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

// Obtener valores de las propiedades de un objeto
const valores = Object.values(personaje);
console.log(valores);
