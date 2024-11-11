document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-element");
      }
    });
  });

  document
    .querySelectorAll(".section2 .title-container, .card-container")
    .forEach((el) => {
      observer.observe(el);
    });
});
