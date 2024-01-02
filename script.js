const image = document.querySelector(".image");
const title = document.querySelector(".title");

image.addEventListener("click", () => {
  title.classList.add("active");
  image.classList.add("active");
});
