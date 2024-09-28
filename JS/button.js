const favoriteButton = document.querySelectorAll(".button");

favoriteButton.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("favorited");

    if (this.classList.contains("favorited")) {
      this.textContent = "favorited";
      this.style.backgroundColor = "orange";
    } else {
      this.textContent = "favorite";
      this.style.backgroundColor = "#007bff";
    }
  });
});
