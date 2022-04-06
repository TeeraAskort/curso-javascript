// import { obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";
import { heroeIfAwait, heroesCiclo } from "./js/await";
import "./styles.css";

// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//   .then(console.log)
//   .catch(console.warn);

// buscarHeroe("capi").then(console.log).catch(console.warn);

// buscarHeroeAsync("iron")
//   .then((heroe) => console.log(heroe))
//   .catch(console.warn);

// obtenerHeroesArr().then(console.table);

// console.table(heroes);

// obtenerHeroeAwait("capi")
//   .then((heroe) => {
//     console.log(heroe);
//   })
//   .catch(console.warn);

heroesCiclo();

heroeIfAwait("iron");
