document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelectorAll(".slider img");
  const dotsContainer = document.querySelector(".dots");

  // Buat dot sesuai jumlah gambar
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = document.querySelectorAll(".dots span");

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    index = (n + slides.length) % slides.length;

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  // Auto slide tiap 3 detik
  setInterval(nextSlide, 3000);
});
