import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHTML = () => {
  const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        <label>Selecciona una fotografia</label>
        <input type="file" accept="image/png, image/jpeg" />

        <br>
        <img id="foto" src="" class="img-thumbnail"/>
    `;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.appendChild(div);

  inputFile = document.querySelector("input");
  imgFoto = document.querySelector("#foto");
};

const events = () => {
  inputFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    subirImagen(file).then((resp) => {
      const imgUrl = resp.secure_url;
      imgFoto.src = imgUrl;
      console.log("Subido");
    });
  });
};

export const init = () => {
  crearInputFileHTML();
  events();
};
