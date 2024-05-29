


const choose = document.getElementById(`ingreso`);
choose.addEventListener(`click`, () => {
  Swal.fire({
    title: `SELECT IDIOM`,
    showCancelButton: true,
    confirmButtonText: "ENGLISH",
    allowOutsideClick: false,
    cancelButtonText: "ESPAÑOL",

    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      return (pagina = location.href = `portfolioEnglish.html`);
    } else {
      return paginaingles = window.location.href = `portfolio.html`;
    }
  });
});
const texto = document.getElementById('texto');
const textoCompleto = 'WELCOME TO MY PORTFOLIOO';
let indice = 0;
let velocidad = 50; // Ajusta la velocidad de escritura (en milisegundos por carácter)
let sonido = new Audio('https://m.youtube.com/watch?v=KRvoQn27yQ0'); // Opcional: sonido de máquina de escribir

function escribir() {
  if (indice < textoCompleto.length) {
    texto.textContent = textoCompleto.substring(0, indice);
    indice++;

    if (sonido) {
      sonido.currentTime = 0; // Reinicia el sonido
      sonido.play();
    }

    setTimeout(escribir, velocidad);
  }
}

escribir();

const axios = require('axios');

document.getElementById('enviar-btn').addEventListener('click', () => {
  axios.post('/send-email', {
    message: 'Hello from frontend!'
  })
 .then(response => {
    console.log(response);
  })
 .catch(error => {
    console.error(error);
  });
});






