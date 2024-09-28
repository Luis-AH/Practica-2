const movieModal = document.getElementById("MovieModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

function openPieModal(movie) {
  modalTitle.textContent = movie.name;
  modalImage.src = movie.image;
  modalDescription.textContent = movie.description;
  movieModal.style.display = "block";
}

const item2 = document.querySelectorAll(".item");
item2.forEach((item) => {
  item.addEventListener("click", () => {
    const movie = {
      name: item.querySelector(".movie-title").textContent,
      image: item.querySelector(".movie-img").src,
      description: item.querySelector(".movie-description").textContent,
    };
    openPieModal(movie);
  });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  movieModal.style.display = "none";
});
