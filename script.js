let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const indicators = document.querySelectorAll(".indicator");

function updateCarousel() {
  const innerCarousel = document.querySelector(".carousel-inner");
  innerCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

setInterval(autoSlide, 3000); // Set interval duration here (3000ms = 3s)
updateCarousel();

const carousel = document.getElementById("carousel");
const indicators2 = document.querySelectorAll(".indicator");
let index = 0;

function showSlide(i) {
  index = (i + indicators.length) % indicators.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((ind, idx) => {
    ind.classList.toggle("bg-white", idx === index);
    ind.classList.toggle("bg-gray-800", idx !== index);
  });
}

document
  .getElementById("next")
  .addEventListener("click", () => showSlide(index + 1));
document
  .getElementById("prev")
  .addEventListener("click", () => showSlide(index - 1));
indicators.forEach((ind, i) =>
  ind.addEventListener("click", () => showSlide(i))
);

setInterval(() => showSlide(index + 1), 3000); // Automatic slide interval

showSlide(0); // Initialize

function toggleTable1() {
  const table1 = document.getElementById("table1");
  table1.classList.toggle("hidden");
}
function toggleTable2() {
  const table2 = document.getElementById("table2");
  table2.classList.toggle("hidden");
}
function toggleTable3() {
  const table3 = document.getElementById("table3");
  table3.classList.toggle("hidden");
}
function toggleTable4() {
  const table4 = document.getElementById("table4");
  table4.classList.toggle("hidden");
}
function toggleTable5() {
  const table5 = document.getElementById("table5");
  table5.classList.toggle("hidden");
}
