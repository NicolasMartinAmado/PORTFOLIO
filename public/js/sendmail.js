

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
            alert(`MESSAGE SENT`)
            formulario.reset();
        } else {
            alert('Error al enviar la opinión.');
        }
    })
    .catch(error => console.error(error));
}


document.addEventListener(`keyup`, e =>{
   if (e.target.matches(`#buscador`)){


    document.querySelectorAll(".technologies").forEach(tech =>{
        tech.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        ?tech.classList.remove("filtro")
        :tech.classList.add("filtro")
    })
   }


})