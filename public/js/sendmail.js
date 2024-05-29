

const formulario = document.getElementById('formularioOpinion');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const opinion = document.getElementById('opinion').value;

    const data = {
        nombre,
        correo,
        opinion
    };

    enviarOpinion(data);
});

function enviarOpinion(data) {
    fetch('/enviar-opinion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
title:'Su opinión ha sido enviada correctamente.',
text: "Respondere a la brevedad, revise su casilla de correo",
icon: "success"
            });
            formulario.reset();
        } else {
            alert('Error al enviar la opinión.');
        }
    })
    .catch(error => console.error(error));
}