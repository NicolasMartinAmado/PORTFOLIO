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
