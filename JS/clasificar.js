const categoryfilter = document.getElementById("categoryFilter");
const item = document.querySelectorAll(".item");

categoryfilter.addEventListener("change", filtrarCategorias);

function filtrarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  item.forEach((movie) => {
    const categoria = movie.getAttribute("data-category");
    if (
      categoriaSeleccionada === "all" ||
      categoria === categoriaSeleccionada
    ) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
